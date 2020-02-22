import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import {debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';
import {GitSearchService} from '../services/git-search.service';
import {fromEvent, Observable} from 'rxjs';
import {ISearchRepoResult} from '../model/ISearchRepoResult';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit {

  public results$: Observable<ISearchRepoResult>;
  @ViewChild('searchInput') searchInput: ElementRef;


  constructor(public searchService: GitSearchService) {}


  ngAfterViewInit(): void {

    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => {
          this.results$ = this.searchService.search(this.searchInput.nativeElement.value);
        })
      )
      .subscribe();
  }

}

