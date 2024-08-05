import { Component, OnInit } from '@angular/core';
import { BooksApiService } from '../../books-api.service';

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrl: './show-books.component.css',
})
export class ShowBooksComponent implements OnInit {
  bookList: any = [];
  constructor(private bookApi: BooksApiService) {}
  ngOnInit(): void {
    this.getAllBooks();
  }
  getAllBooks() {
    this.bookApi.get_Books().subscribe((res: any) => {
      this.bookList = res;
      console.log(this.bookList);
    });
  }
  ShowBook() {
    console.log('Show Clicked');
  }
  EditBook() {
    console.log('Edit Clicked');
  }
  DeleteBook() {
    console.log('Delete Clicked');
  }
}
