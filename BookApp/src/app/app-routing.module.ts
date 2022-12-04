import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookListComponent } from './components/book-list/book-list.component';

  const routes: Routes = [
    { path: '', component: BookListComponent },
    { path: 'list', component: BookListComponent },
    { path: 'add', component: BookEditComponent },
    { path: 'edit/:id', component: BookEditComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
