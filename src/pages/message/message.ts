import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from "../../models/profile/profile.interface";
import { Message } from "../../models/message/message.interface";
import { MESSAGE_LIST } from "../../mocks/message/message.mock";
import { AuthenticationServiceProvider } from "../../providers/authentication-service/authentication-service.provider";

/**
 * Generated class for the MessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  targetProfile: Profile;
  messageList: Message[];
  userId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthenticationServiceProvider) {
    this.messageList = MESSAGE_LIST; //load mock data
  }

  ionViewWillLoad() {
    this.targetProfile = this.navParams.get('profile');
    this.authService.getAuthenticatedUser().subscribe(r => this.userId = r.uid);
  }

}
