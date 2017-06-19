import { Component } from '@angular/core';
import { NavController, ToastController } from "ionic-angular";
import { AngularFireAuth } from 'angularfire2/auth';

import { Account } from '../../models/account/account.interface';

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

  account: Account = {} as Account;

  constructor(private navCtrl : NavController, private afAuth: AngularFireAuth, private toast: ToastController) {
  }

  async login(){
    try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password);
      console.log(result);
      this.toast.create({
        message: 'Success!',
        duration: 1000 //1 seconds
      }).present();
      this.navigateToPage('TabsPage');
    }
    catch(e){
      console.error(e);
      this.toast.create({
        message: e.message,
        duration: 3000 //3 seconds
      }).present();

    }
  }

  navigateToPage(pageName: string){
    //Not certain I'm a huge fan of this pattern. We only have two options but we are magic-string matching to one
    pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }

}
