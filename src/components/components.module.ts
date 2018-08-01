import { NgModule } from '@angular/core';
import { SearchResultComponent } from './search-result/search-result.component';
import { IonicPageModule } from 'ionic-angular';
import { RepositoriesComponent } from './repositories/repositories.component';
@NgModule({
	declarations: [SearchResultComponent,
    RepositoriesComponent],
	imports: [
		IonicPageModule
	],
	exports: [SearchResultComponent,
    RepositoriesComponent]
})
export class ComponentsModule {}
