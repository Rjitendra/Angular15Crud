import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IOrder } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderUrl = 'api/orders/';
  constructor(private http: HttpClient) { }

  getOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.orderUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  getOrderById(id: number): Observable<IOrder> {
    return this.http.get<IOrder>(this.orderUrl + id).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createOrder(book: IOrder): Observable<IOrder> {

    return this.http.post<IOrder>(this.orderUrl, book).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  editOrder(order: IOrder): Observable<any> {
    return this.http.put(this.orderUrl + order.id, order);
  }

  deleteOrder(id: number): Observable<any> {
    return this.http.delete(this.orderUrl + id);
  }

}
