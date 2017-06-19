import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MESSAGE_LIST } from '../../mocks/message/message.mock';
import { USER_LIST } from '../../mocks/user/user.mock';
import { Message } from "../../models/message/message.interface";

/**
 * Generated class for the InboxPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  messages : Message[] = MESSAGE_LIST;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


}
