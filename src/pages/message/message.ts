import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from "../../models/profile/profile.interface";
import { Message } from "../../models/message/message.interface";
import { MESSAGE_LIST } from "../../mocks/message/message.mock";
import { AuthenticationServiceProvider } from "../../providers/authentication-service/authentication-service.provider";
import { DataServiceProvider } from "../../providers/data-service/data-service.provider";
import { ChatServiceProvider } from "../../providers/chat-service/chat-service.provider";

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
  fromProfile: Profile;
  messageList: Message[];
  userId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthenticationServiceProvider, private dataService: DataServiceProvider
  , private chatService: ChatServiceProvider) {
    this.messageList = MESSAGE_LIST; //load mock data
  }

  ionViewWillLoad() {
    this.targetProfile = this.navParams.get('profile');
    this.dataService.getAuthenticatedProfile().subscribe(r => {
      this.fromProfile = r;
      this.userId = r.$key;
    });
  }

  async sendMessage(content: string){
    try{
      const message : Message = {
        userToId: this.targetProfile.$key,
        userToProfile: {
          firstName: this.targetProfile.firstName,
          lastName: this.targetProfile.lastName
        },
        userFromId: this.fromProfile.$key,
        userFromProfile: {
          firstName: this.fromProfile.firstName,
          lastName: this.fromProfile.lastName
        },
        content: content,
        date: new Date()
      }
      MESSAGE_LIST.push(message);
      await this.chatService.sendChat(message);
    }
    catch(e){
      console.error(e);
    }
  }
}
