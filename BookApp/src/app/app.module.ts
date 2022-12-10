import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { OrderEditComponent } from './components/order-edit/order-edit.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { DataService } from './service/data.service';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookEditComponent,
    OrderListComponent,
    OrderEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
