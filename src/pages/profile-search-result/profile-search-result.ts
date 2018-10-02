import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubServiceProvider} from "../../providers/github-service/github-service";
import { User } from "../../models/user.interface";
import {Repository} from "../../models/repository.interface";

/**
 * Generated class for the ProfileSearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'profile/results/:userName'
})
@Component({
  selector: 'page-profile-search-result',
  templateUrl: 'profile-search-result.html',
})
export class ProfileSearchResultPage {
  userName: string;
  user: User;
  repositories: Repository[];

  constructor(private github: GithubServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillLoad() {
    this.userName = this.navParams.get('userName');
    console.log(this.userName);
    this.getUserInformation()
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileSearchResultPage');
  }
  getUserInformation(): void {
    this.github.getUserInformation(this.userName).subscribe((data: User) => this.user = data);
    this.github.getRepositoryInformation(this.userName).subscribe((data: Repository[]) => this.repositories = data)
    //this.github.mockGetUserInformation(this.userName).subscribe((data: User) => this.user = data);
    //this.github.mockGetRepositoryInformation(this.userName).subscribe((data: Repository[]) => this.repositories = data)
  }
}
