//TODO: Having all of your components in a single module is not something I belive is a good idea. Will break them out to revlevant sections
import { IonicModule } from "ionic-angular";
import { NgModule } from '@angular/core';
import { LoginFormComponent } from "./login-form/login-form.component";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { EditProfileFormComponent } from "./edit-profile-form/edit-profile-form.component";
import { ProfileViewComponent } from "./profile-view/profile-view.component";
import { ProfileSearchComponent } from "./profile-search/profile-search.component";
import { SendMessageComponent } from "./send-message/send-message.component";
import { ChatMessageComponent } from "./chat-message/chat-message.component";
import { OnlineUsersComponent } from "./online-users/online-users.component";
import { LastMessageListComponent } from "./last-message-list/last-message-list.component";

@NgModule({
    declarations: [ 
        LoginFormComponent,
        RegisterFormComponent,
        EditProfileFormComponent, 
        ProfileViewComponent,
        ProfileSearchComponent,
        SendMessageComponent,
        ChatMessageComponent,
        OnlineUsersComponent,
        LastMessageListComponent,
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
        ChatMessageComponent,
        OnlineUsersComponent,
        LastMessageListComponent,
        ]
})

export class ComponentsModule{
    
}