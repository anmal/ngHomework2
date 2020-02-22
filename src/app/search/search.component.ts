import {
  AfterViewInit,
  Component,
} from '@angular/core';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';
import {GitSearchService} from '../services/git-search.service';
import {Observable} from 'rxjs';
import {ISearchRepoResult} from '../model/ISearchRepoResult';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit {

  public results$: Observable<ISearchRepoResult>;
  searchInput = new FormControl('');


  constructor(public searchService: GitSearchService) {}


  ngAfterViewInit(): void {

    this.searchInput.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap((value) => {
          this.results$ = this.searchService.search(value);
        })
      )
      .subscribe();
  }

}

