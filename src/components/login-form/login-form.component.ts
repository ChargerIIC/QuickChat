import { Component } from '@angular/core';
import { NavController } from "ionic-angular";

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  constructor(private navCtrl : NavController) {
  }

  navigateToPage(pageName: string){
    //Not certain I'm a huge fan of this pattern. We only have two options but we are magic-string matching to one
    pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }

}
