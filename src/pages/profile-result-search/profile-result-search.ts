import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github-service/github-service';
import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';


@IonicPage(
  {
    segment: 'profile/results/:username'
}
)
@Component({
  selector: 'page-profile-result-search',
  templateUrl: 'profile-result-search.html',
})
export class ProfileResultSearchPage {

  username: string;
  user: User;
  repositories: Repository[];
  constructor(private github: GithubServiceProvider, private navParams: NavParams) {
  }

  getUserInformation(): void {
    this.github.getUserInformation(this.username).subscribe((data: User) => this.user = data)
    this.github.getRepositoryInformation(this.username).subscribe((data: Repository[]) => this.repositories = data)
    // this.github.mockGetUserInformation(this.username).subscribe((data: User) => this.user = data);
    // this.github.mockGetRepositoryInformation(this.username).subscribe((data: Repository[]) => this.repositories = data)
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    if (this.username) {
      this.getUserInformation();
    }
  }

}
