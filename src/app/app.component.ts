import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthenticationServiceProvider } from "../providers/authentication-service/authentication-service.provider";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private authService: AuthenticationServiceProvider) 
  {
    this.authService.getAuthenticatedUser().subscribe(a => !a ? this.rootPage = 'LoginPage' : this.rootPage = 'TabsPage');
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.rootPage = 'LoginPage';
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

