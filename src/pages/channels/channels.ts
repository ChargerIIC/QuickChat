import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ChatServiceProvider } from "../../providers/chat-service/chat-service.provider";
import { Observable } from "rxjs/Observable";
import { Channel } from "../../models/channel/channel.interface";

/**
 * Generated class for the ChannelsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  channelList: Observable<Channel>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrlr : AlertController, private chatService: ChatServiceProvider) {
  }

  ionViewWillLoad() {
    this.getChannels();
  }

  getChannels(){
    this.channelList = this.chatService.getChannelList();
  }

  showAddChannelDialog(){
    this.alertCtrlr.create({
      title: 'Channel Name:',
      inputs: [{
        name: 'channelName'
      }],
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel'
        },
        {
          text: 'Add',
          handler: data => { this.chatService.addChannel(data.channelName)}
        }
      ]
    }).present();
  }

}
