import { Component, OnInit } from '@angular/core';
import { DataServiceProvider } from "../../providers/data-service/data-service.provider";
import { FirebaseListObservable } from "angularfire2/database";
import { Profile } from "../../models/profile/profile.interface";

/**
 * Generated class for the OnlineUsersComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'online-users',
  templateUrl: 'online-users.component.html'
})
export class OnlineUsersComponent  implements OnInit{

  userList: FirebaseListObservable<Profile[]>;

  constructor(private dataService: DataServiceProvider) {
  }

  setUserOnline(){
    this.dataService.getAuthenticatedProfile().subscribe(p => {
      this.dataService.setUserStatusToOnline(p);
    })
  }

  getOnlineUsers(){
    this.userList = this.dataService.getOnlineUsers();
  }

  ngOnInit(): void {
    this.setUserOnline();
    this.getOnlineUsers();
  }

}
