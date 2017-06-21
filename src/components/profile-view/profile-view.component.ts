import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from "firebase/app";
import { LoadingController, Loading } from "ionic-angular";

import { DataServiceProvider } from "../../providers/data-service/data-service.provider";
import { AuthenticationServiceProvider } from "../../providers/authentication-service/authentication-service.provider";
import { Profile } from "../../models/profile/profile.interface";

@Component({
  selector: 'profile-view',
  templateUrl: 'profile-view.component.html'
})
export class ProfileViewComponent implements OnInit{

  @Output() existingProfile: EventEmitter<Profile> = new EventEmitter<Profile>();

  public userProfile: Profile;
  private loader: Loading;

  constructor(private loadingCtrlr: LoadingController, private dataService: DataServiceProvider, private authService: AuthenticationServiceProvider) {
    this.loader = this.loadingCtrlr.create({
      content: 'Loading Profile...'
    })
  }

  ngOnInit(): void {
    this.loader.present();

    this.dataService.getAuthenticatedProfile().subscribe(p => {
      this.userProfile = p;
      this.existingProfile.emit(this.userProfile);
      this.loader.dismiss();
    })

  }

}
