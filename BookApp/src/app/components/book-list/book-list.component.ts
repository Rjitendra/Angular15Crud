import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books!: IBook[];

  constructor(private bookService: BookService,private router:Router) { }

    ngOnInit(): void {
      this.bookService.getBooks().subscribe((res => {
        this.books = res;
      }));
    }

    bookEdit(book:IBook){
      this.router.navigate(['edit/'+book.id])
    }
    
    deleteBook(book:IBook): void {
      this.bookService.deleteBook(book.id as number).subscribe((res => {
        this.books = this.books.filter(x => x.id !== book.id);
      }));
  
    }

}
