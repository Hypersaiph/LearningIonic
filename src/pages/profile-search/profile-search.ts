import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ProfileSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'profile'
})
@Component({
  selector: 'page-profile-search',
  templateUrl: 'profile-search.html',
})
export class ProfileSearchPage {
  userName: string;

  constructor(private navCtrl: NavController, public navParams: NavParams, private toast: ToastController) {
  }
  getUserInformation(): void {
    if(this.userName != null && this.userName != "") {
      this.navCtrl.push('ProfileSearchResultPage', {
        userName: this.userName
      })
    }else {
      this.toast.create({
        message: 'F*cking input some string on the username field!',
        duration: 3000
      }).present();
    }
  }

}
