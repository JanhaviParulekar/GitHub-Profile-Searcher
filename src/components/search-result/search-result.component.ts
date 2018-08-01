import { Component, Input } from '@angular/core';
import { User } from '../../models/user.interface';


@Component({
  selector: 'search-result',
  templateUrl: 'search-result.component.html'
})
export class SearchResultComponent {


  constructor() {
    console.log('Hello SearchResultComponent Component');
  }

  @Input() user: User

}
