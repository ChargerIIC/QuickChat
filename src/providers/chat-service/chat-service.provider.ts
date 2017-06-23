import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { Channel } from "../../models/channel/channel.interface";
import { ChannelMessage } from "../../models/channelMessage/channelMessage.interface";
import { Message } from "../../models/message/message.interface";
import { AuthenticationServiceProvider } from "../authentication-service/authentication-service.provider";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/first';
import 'rxjs/add/observable/of';

/*
  Generated class for the ChatServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ChatServiceProvider {

  constructor(private database: AngularFireDatabase, private authService: AuthenticationServiceProvider) {
  }

  addChannel(channelName: string){
    this.database.list('/channel-names/').push({name: channelName});
  }

  getChannelList() : FirebaseListObservable<Channel>{
    return this.database.list('/channel-names/');
  }

  getChannelChatRef(key: string){
    return this.database.list(`/channels/${key}`);
  }

  getChats(userToId: string){
    return this.authService.getAuthenticatedUser()
      .map(a => a.uid)
      .mergeMap(uid => this.database.list(`/user-messages/${uid}/${userToId}`))
      .mergeMap(lst => {
        return Observable.forkJoin(
          lst.map(c => this.database.object(`/messages/${c.$key}`).first()),
          (...vals: Message[]) => {
            console.log(vals);
            return vals;
          }
        )
      })
  }

  getLastMessagesForUser() : Observable<Message[]> {
    return this.authService.getAuthenticatedUser()
      .map(a => a.uid)
      .mergeMap(uid => this.database.list(`/last-messages/${uid}`))
      .mergeMap(msgIds => {
        return Observable.forkJoin(
          msgIds.map(msg => {
            return this.database.object(`/messages/${msg.key}`)
              .first()
          }),
          (...values)=> {
            return values;
          }
        )
      })
  }

  async sendChannelChatMessage(key: string, message: ChannelMessage){
    await this.database.list(`/channels/${key}`).push(message);
  }

  async sendChat(message: Message){
    await this.database.list(`/messages`).push(message);
  }
}
