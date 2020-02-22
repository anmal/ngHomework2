import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BaseInterceptor} from './services/base.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ShortRepoInfoComponent } from './search/search-result/short-repo-info/short-repo-info.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SearchResultComponent } from './search/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ShortRepoInfoComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
