import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

constructor() { }

createDb() {
  return {
    books:[
      {
        id: 1,
        name: 'github.com/rjitenra',
        price: 0,
        publisher: 'Jitendra'
      },
    ],
  }
}}
