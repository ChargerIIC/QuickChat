import { Component, OnDestroy, Output, EventEmitter, Input, OnInit } from '@angular/core';
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
export class EditProfileFormComponent implements OnInit, OnDestroy{

  @Output() saveProfileResult: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  @Input() profile: Profile;

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;

  constructor(private dataService: DataServiceProvider, private authService: AuthenticationServiceProvider) {
    this.authenticatedUser$ = this.authService.getAuthenticatedUser().subscribe((u: User) => {
      this.authenticatedUser = u;
    });
  }

  ngOnInit(): void {
    if(!this.profile){
      this.profile = {} as Profile;
    }
  }


  async saveProfile(){
    if(this.authenticatedUser){
      this.profile.email = this.authenticatedUser.email;
      const result = await this.dataService.saveProfile(this.authenticatedUser, this.profile);
      this.saveProfileResult.emit(result);
    }
  }

  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }

}
