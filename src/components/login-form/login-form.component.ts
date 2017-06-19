import { Component, Output, EventEmitter } from '@angular/core';
import { NavController } from "ionic-angular";
import { AngularFireAuth } from 'angularfire2/auth';

import { Account } from '../../models/account/account.interface';
import { LoginResponse } from "../../models/loginResponse/loginResponse.interface";

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  @Output() loginStatus: EventEmitter<LoginResponse> = new EventEmitter<LoginResponse>();

  account: Account = {} as Account;

  constructor(public navCtrl : NavController, private afAuth: AngularFireAuth) {
  }

  async login(){
    try{
      const result = {
        result: await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password),
      }
      this.loginStatus.emit(result);
    }
    catch(e){
      const error: LoginResponse = {
        error: e
      }
      this.loginStatus.emit(error);
    }
  }

  navigateToRegistration(){
    this.navCtrl.push('RegisterPage');
  }
}
