import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from "../../models/profile/profile.interface";


/**
 * Generated class for the EditProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  profile = {} as Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var profile = this.navParams.get('existingProfile')
    if(profile)
    {
      this.profile = profile;
    }
  }

  saveProfileResult(event: Boolean){
    event? this.navCtrl.setRoot('TabsPage') : console.error('User was not authenticated or user was not saved');
  }
}
