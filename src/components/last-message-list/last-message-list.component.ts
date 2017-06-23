import { Component, OnInit } from '@angular/core';
import { ChatServiceProvider } from "../../providers/chat-service/chat-service.provider";
import { Message } from "../../models/message/message.interface";
import { Observable } from "rxjs/Observable";
import { NavController } from "ionic-angular";

/**
 * Generated class for the LastMessageListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'last-message-list',
  templateUrl: 'last-message-list.component.html'
})
export class LastMessageListComponent implements OnInit{

  messageList: Observable<Message[]>;

  constructor(private charService: ChatServiceProvider, private navCtrl: NavController) {
  }

  ngOnInit(): void {
    this.messageList = this.charService.getLastMessagesForUser();
  }

  navigateToMessage(message: Message){
    const selectedProfile = {
      $key: message.userToId,
      firstName: message.userToProfile.firstName,
      lastName: message.userToProfile.lastName
    }

    this.navCtrl.push('MessagePage', {profile: selectedProfile});
  }
}
