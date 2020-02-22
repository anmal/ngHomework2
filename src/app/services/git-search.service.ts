import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {IShortRepoInfo} from '../model/IShortRepoInfo';
import {finalize, tap} from 'rxjs/operators';
import {ISearchRepoResult} from '../model/ISearchRepoResult';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {

  private isSearching$$ = new BehaviorSubject(false);
  public isSearching$ = this.isSearching$$.asObservable();

  private lastError$$ = new BehaviorSubject(null);
  public lastError$ = this.lastError$$.asObservable();

  constructor(private http: HttpClient) { }


  public search(what: string): Observable<ISearchRepoResult> {

    console.log(what, 'searching...');
    this.isSearching$$.next(true);

    return this.http.get<ISearchRepoResult>(`search/repositories?q=${what}&page=1&per_page=20`).pipe(
      tap(result => {console.log('result received', result);
                     this.lastError$$.next(null); },
          error => {
                console.error('request failed');
                this.lastError$$.next(error.message); } ),
      finalize(() => {
          console.log('search finished');
          this.isSearching$$.next(false);
      } )
    );
  }
}
