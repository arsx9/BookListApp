import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksApiService {
  baseUrl = 'http://bookapp.local/api/';
  constructor(private http: HttpClient) {}
  get_Books() {
    return this.http.get(this.baseUrl + 'books');
  }
}
