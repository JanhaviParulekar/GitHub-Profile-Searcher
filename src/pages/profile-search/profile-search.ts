import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-profile-search',
  templateUrl: 'profile-search.html',
})
export class ProfileSearchPage {

  username: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  searchUser(): void {
    this.navCtrl.push('ProfileResultSearchPage', {username: this.username});
  }

}
