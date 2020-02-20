import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IShortRepoInfo} from '../model/IShortRepoInfo';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {

  constructor(private http: HttpClient) { }

  public search(what: string): Observable<IShortRepoInfo> {
    return this.http.get<IShortRepoInfo>(`search/repositories?q=${what}&page=1&per_page=20`).pipe(
      tap(result => console.log('получен результат', result), error => console.error('request failed'))
    );
  }
}
