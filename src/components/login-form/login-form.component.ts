import { Component, Output, EventEmitter } from '@angular/core';
import { NavController } from "ionic-angular";

import { Account } from '../../models/account/account.interface';
import { LoginResponse } from "../../models/loginResponse/loginResponse.interface";
import { AuthenticationServiceProvider } from "../../providers/authentication-service/authentication-service.provider";

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

  constructor(public navCtrl : NavController, private authService: AuthenticationServiceProvider) {
  }

  async login(){
    const result = await this.authService.login(this.account);
    this.loginStatus.emit(result);
  }

  navigateToRegistration(){
    this.navCtrl.push('RegisterPage');
  }
}
