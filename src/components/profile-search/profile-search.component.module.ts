import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ProfileSearchComponent } from './profile-search.component';

@NgModule({
  declarations: [
    ProfileSearchComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ProfileSearchComponent
  ]
})
export class ProfileSearchComponentModule {}
