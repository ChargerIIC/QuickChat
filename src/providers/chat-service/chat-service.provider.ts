import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { Channel } from "../../models/channel/channel.interface";
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

/*
  Generated class for the ChatServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ChatServiceProvider {

  constructor(private database: AngularFireDatabase) {
  }

  addChannel(channelName: string){
    this.database.list('/channel-names/').push({name: channelName});
  }

  getChannelList() : FirebaseListObservable<Channel>{
    return this.database.list('/channel-names/');
  }
}
