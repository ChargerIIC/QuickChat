import { Component, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { User } from "firebase/app";

import { Profile } from "../../models/profile/profile.interface";
import { DataServiceProvider } from '../../providers/data-service/data-service.provider';
import { AuthenticationServiceProvider } from '../../providers/authentication-service/authentication-service.provider';

/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnDestroy{

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;

  private profile : Profile = {} as Profile;

  constructor(private dataService: DataServiceProvider, private authService: AuthenticationServiceProvider) {
    this.authenticatedUser$ = this.authService.getAuthenticatedUser().subscribe((u: User) => {
      this.authenticatedUser = u;
    });
  }

  async saveProfile(){
    if(this.authenticatedUser){
      this.profile.email = this.authenticatedUser.email;
      const result = await this.dataService.saveProfile(this.authenticatedUser, this.profile);
      console.log(result);
    }
  }

  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }

}
