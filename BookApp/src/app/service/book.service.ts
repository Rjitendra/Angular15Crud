import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IBook } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksUrl = 'api/books/';
  constructor(private http: HttpClient) { }

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.booksUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  getBookById(id: number): Observable<IBook> {
    return this.http.get<IBook>(this.booksUrl + id).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createBook(book: IBook): Observable<IBook> {

    return this.http.post<IBook>(this.booksUrl, book).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  editBook(book: IBook): Observable<any> {
    return this.http.put(this.booksUrl + book.id, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(this.booksUrl + id);
  }

}
