import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';
import {GitSearchService} from '../services/git-search.service';
import {fromEvent, Observable} from 'rxjs';
import {IShortRepoInfo} from '../model/IShortRepoInfo';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit {

  public results$: Observable<IShortRepoInfo>;
  @ViewChild('input') input: ElementRef;

  constructor(private searchService: GitSearchService) { }

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.results$ = this.searchService.search(this.input.nativeElement.value);
        })
      )
      .subscribe();
  }
}
