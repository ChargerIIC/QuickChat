//TODO: Having all of your components in a single module is not something I belive is a good idea. Will break them out to revlevant sections
import { IonicModule } from "ionic-angular";
import { NgModule } from '@angular/core';
import { LoginFormComponent } from "./login-form/login-form.component";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { EditProfileFormComponent } from "./edit-profile-form/edit-profile-form.component";
import { ProfileViewComponent } from "./profile-view/profile-view.component";
import { ProfileSearchComponent } from "./profile-search/profile-search.component";
import { SendMessageComponent } from "./send-message/send-message.component";

@NgModule({
    declarations: [ 
        LoginFormComponent,
        RegisterFormComponent,
        EditProfileFormComponent, 
        ProfileViewComponent,
        ProfileSearchComponent,
        SendMessageComponent,
        ],
    imports: [
        IonicModule
        ],
    exports: [ 
        LoginFormComponent,
        RegisterFormComponent,
        EditProfileFormComponent,
        ProfileViewComponent,
        ProfileSearchComponent,
        SendMessageComponent,
        ]
})

export class ComponentsModule{
    
}