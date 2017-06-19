import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from "../../models/loginResponse/loginResponse.interface";

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController) {
  }

  register(event: LoginResponse){
    if(!event.error){
      this.toast.create({
        message: `Account created for ${event.result.email}`,
        duration: 3000 //3 seconds
      })
      this.navCtrl.setRoot('EditProfilePage');
    }
    else{
      this.toast.create({
        message: event.error.message + " - " + event.error.code,
        duration: 3000 //3 seconds
      }).present();
    }
  }
}
