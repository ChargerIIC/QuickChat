import { Component } from '@angular/core';
import { DataServiceProvider } from "../../providers/data-service/data-service.provider";
import { Profile } from "../../models/profile/profile.interface";

/**
 * Generated class for the ProfileSearchComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'profile-search',
  templateUrl: 'profile-search.component.html'
})
export class ProfileSearchComponent {

  query: string;

  profileList: Profile[];

  constructor(private dataService: DataServiceProvider) {
  }

  searchUser(query: string){
    this.dataService.searchForProfiles(query).subscribe(p => {
      //console.log(p);
      this.profileList = p;
    })
  }
}
