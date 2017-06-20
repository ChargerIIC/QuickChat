import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from "firebase/app";

import { LoginResponse } from "../../models/loginResponse/loginResponse.interface";
import { DataServiceProvider } from "../../providers/data-service/data-service.provider";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private dataService: DataServiceProvider ) {
  }

  login(event : LoginResponse){
    console.log(event);
    if(!event.error){
      this.toast.create({
        message: `Welcome to QuickChat, ${event.result.email}`,
        duration: 1000 //1 seconds
      }).present();
      this.dataService.getProfile(<User>event.result).subscribe(profile => {
        //if profile doesn't exist for a registered user we send them to the edit profile page
        profile.val() ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('EditProfilePage'); 
      })
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
