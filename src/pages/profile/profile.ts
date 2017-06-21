import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from "../../models/profile/profile.interface";
import { AuthenticationServiceProvider } from "../../providers/authentication-service/authentication-service.provider";
/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {

  existingProfile : Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthenticationServiceProvider) {
  }

  getExistingProfile(profile: Profile){
    this.existingProfile = profile;
  }

  navigateToEditProfile(){
    this.navCtrl.push('EditProfilePage', { existingProfile: this.existingProfile });
  }

  logout(){
    this.authService.logout();
    this.navCtrl.setRoot('LoginPage');
  }

  ngOnInit(): void {
    
  }

}
