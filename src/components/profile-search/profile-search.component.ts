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
    const normalizedQuery = query.trim(); //TODO: add casing normalization as well (needs search mod to match) //TODO: add split by space
    this.dataService.searchForProfiles(normalizedQuery).subscribe(p => {
      //console.log(p);
      this.profileList = p;
    })
  }
}
