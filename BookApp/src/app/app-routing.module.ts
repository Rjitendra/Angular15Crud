import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { OrderEditComponent } from './components/order-edit/order-edit.component';
import { OrderListComponent } from './components/order-list/order-list.component';

  const routes: Routes = [
    { path: '', component: OrderListComponent },
    { path: 'list', component: OrderListComponent },
    { path: 'add', component: OrderEditComponent },
    { path: 'edit/:id', component: OrderEditComponent },
    { path: 'book-list', component: BookListComponent },
    { path: 'book-add', component: BookEditComponent },
    { path: 'book/edit/:id', component: BookEditComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
