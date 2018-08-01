import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileResultSearchPage } from './profile-result-search';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProfileResultSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileResultSearchPage),
    ComponentsModule
  ],
})
export class ProfileResultSearchPageModule {}
