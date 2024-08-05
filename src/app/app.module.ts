import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowBooksComponent } from './_books/show-books/show-books.component';
import { ShowBookComponent } from './_books/show-book/show-book.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ShowBooksComponent, ShowBookComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration(), provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
