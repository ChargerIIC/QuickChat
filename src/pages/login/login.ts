import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToPage(pageName: string){
    //Not certain I'm a huge fan of this pattern. We only have two options but we are magic-string matching to one
    pageName === 'InboxPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }

}
