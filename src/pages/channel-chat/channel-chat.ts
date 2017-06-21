import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from "angularfire2/database";

import { Channel } from "../../models/channel/channel.interface";
import { ChatServiceProvider } from "../../providers/chat-service/chat-service.provider";
import { ChannelMessage } from "../../models/channelMessage/channelMessage.interface";

/**
 * Generated class for the ChannelChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {

  channelMessages: FirebaseListObservable<ChannelMessage[]>;
  channel: Channel;

  constructor(public navCtrl: NavController, public navParams: NavParams, private chatService: ChatServiceProvider) {
  }

  ionViewWillLoad() {
    this.channel = this.navParams.get('channel');
    this.channelMessages = this.chatService.getChannelChatRef(this.channel.$key);
  }

  sendMessage(content: string){
    let channelMessage: ChannelMessage = {
      content
    }

    this.chatService.sendChannelChatMessage(this.channel.$key, channelMessage);
  }

}
