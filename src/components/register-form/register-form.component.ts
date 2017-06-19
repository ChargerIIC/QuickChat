import { Component, EventEmitter, Output } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { Account } from '../../models/account/account.interface';
import { AuthenticationServiceProvider } from "../../providers/authentication-service/authentication-service.provider";
import { LoginResponse } from "../../models/loginResponse/loginResponse.interface";
/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

  @Output() registerStatus : EventEmitter<LoginResponse> = new EventEmitter<LoginResponse>();

  account: Account = {} as Account;

  constructor(private auth: AuthenticationServiceProvider) {
  }

  async register(){
    try{
      const result = await this.auth.registerUser(this.account);
      this.registerStatus.emit(result);
    }
    catch(e){
      console.error(e);
     this.registerStatus.emit(e);
    }
  }
}
