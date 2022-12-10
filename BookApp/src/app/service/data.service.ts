import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IBook } from '../model/book';
import { IOrder, OrderType } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    // let books = [ .. ];


    let books: IBook[] = [
      {
        id: 1,
        name: 'github.com/rjitenra',
        price: 0,
        publisher: 'Jitendra'
      },
    ];
    let orders: IOrder[] = [
      {
        id: 1,
        description: 'book',
        value: 1,
        type: OrderType.Store
      },
    ];

    return { books, orders }
  }
}
