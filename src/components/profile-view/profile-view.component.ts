import { Component, OnInit } from '@angular/core';
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

  userProfile: Profile;

  loader: Loading;

  constructor(private loadingCtrlr: LoadingController, private dataService: DataServiceProvider, private authService: AuthenticationServiceProvider) {
    this.loader = this.loadingCtrlr.create({
      content: 'Loading Profile...'
    })
  }

  ngOnInit(): void {
    this.loader.present();
    this.authService.getAuthenticatedUser().subscribe((u: User) => {
      this.dataService.getProfile(u).subscribe((p) => {
        this.userProfile = <Profile>p.val();
      });
    });
    this.loader.dismiss();
  }

}
