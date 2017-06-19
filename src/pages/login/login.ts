import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginResponse } from "../../models/loginResponse/loginResponse.interface";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController) {
  }

  login(event : LoginResponse){
    console.log(event);
    if(!event.error){
      this.toast.create({
        message: `Welcome to QuickChat, ${event.result.email}`,
        duration: 1000 //1 seconds
      }).present();
      this.navCtrl.setRoot('TabsPage');
    }
    else{
      this.toast.create({
        message: event.error.message + " - " + event.error.code,
        duration: 3000 //3 seconds
      }).present();
    }
  }

}
