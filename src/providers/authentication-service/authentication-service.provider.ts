import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";

import { Account } from '../../models/account/account.interface';
import { LoginResponse } from "../../models/loginResponse/loginResponse.interface";

/*
  Generated class for the AuthenticationServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthenticationServiceProvider {

  constructor(private auth: AngularFireAuth) {
  }

  async login(account: Account){
    try{
      return <LoginResponse>{
        result: await this.auth.auth.signInWithEmailAndPassword(account.email, account.password),
      }
    }
    catch(e){
      return <LoginResponse>{
        error: e
      }
    }

  }

  logout(){
    this.auth.auth.signOut();
  }
  
  getAuthenticatedUser(){
    return this.auth.authState;
  }

  async registerUser(account: Account){
    try{
      return <LoginResponse>{
        result: await this.auth.auth.createUserWithEmailAndPassword(account.email , account.password ),
      }
    }
    catch(e){
      return <LoginResponse>{
        error: e
      }
    }

  }

}
