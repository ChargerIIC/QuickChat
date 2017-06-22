import { Injectable } from '@angular/core';
import "rxjs/add/operator/take";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database'
import { database } from 'firebase';
import { User } from 'firebase/app';

import { Profile } from '../../models/profile/profile.interface';
import { AuthenticationServiceProvider } from "../authentication-service/authentication-service.provider";
//import { Observable } from "rxjs/Observable";
/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  profileObj: FirebaseObjectObservable<Profile>;
  profileList: FirebaseObjectObservable<Profile>;

  constructor(private database: AngularFireDatabase, private authService: AuthenticationServiceProvider) {
  }

  getProfile(user: User){
    this.profileObj = this.database.object(`/profiles/${user.uid}`, {preserveSnapshot: true});
    return this.profileObj.take(1);
  }

  getAuthenticatedProfile(){
    return this.authService.getAuthenticatedUser()
      .map(u => u.uid)
      .mergeMap(authId => this.database.object(`profiles/${authId}`)).take(1);
  }

  getOnlineUsers() : FirebaseListObservable<Profile[]>{
    return this.database.list(`online-users`);
  }

  async saveProfile(user : User, profile: Profile){
   this.profileObj = this.database.object(`/profiles/${user.uid}`); //TODO: see if we can call getProfile instead.
   try{ 
    await this.profileObj.set(profile);  
    return true;
   }
   catch(e){
    console.error(e);
    return false;
   }
  }

  setUserStatusToOnline(profile: Profile){
    const ref = database().ref(`online-users/${profile.$key}`);
    try{
      ref.update({ ...profile});
      ref.onDisconnect().remove();
    }
    catch(e){
      console.error(e);
    }
  }

  searchForProfiles(searchTerm: string){
    const query = this.database.list('/profiles', {
      query:{
        orderByChild: 'firstName',
        equalTo: searchTerm,
      }
    })

      return query.take(1);
    }
  }