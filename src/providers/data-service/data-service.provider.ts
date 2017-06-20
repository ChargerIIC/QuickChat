import { Injectable } from '@angular/core';
import "rxjs/add/operator/take";
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database'
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';
import { Observable } from "rxjs/Observable";
/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  profileObj: FirebaseObjectObservable<Profile>;

  constructor(private database: AngularFireDatabase) {
  }

  getProfile(user: User){
    this.profileObj = this.database.object(`/profiles/${user.uid}`, {preserveSnapshot: true});
    return this.profileObj.take(1);
  }

  async saveProfile(user : User, profile: Profile): Promise<Boolean>{
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
}
