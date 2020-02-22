import {Component, Input} from '@angular/core';
import {ISearchRepoResult} from '../../model/ISearchRepoResult';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

  @Input() searchResult: ISearchRepoResult;

  constructor() { }

}
