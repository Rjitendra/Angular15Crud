import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IBook } from '../../model/book';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  myForm!: FormGroup;
  id!: number;
  isAdd = false;
  isLoad = false;
  submitted = false;

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.isAdd = this.id ? false : true;
          if (!this.isAdd) {
            this.bookService.getBookById(this.id).subscribe((res: IBook) => {
              this.myForm = new FormGroup({
                name: new FormControl(res.name, Validators.required),
                price: new FormControl(res.price, Validators.required),
                publisher: new FormControl(res.publisher, Validators.required)
              });
              this.isLoad = true;
            })
          } else {
            this.isLoad = true;
            this.myForm = new FormGroup({
              name: new FormControl('', Validators.required),
              price: new FormControl('', Validators.required),
              publisher: new FormControl('', Validators.required)
            });
          }
        }
      );
  }

  get f(): { [key: string]: AbstractControl; } { return this.myForm.controls; }

  submit(form: FormGroup) {

    this.submitted = true;
    if (form.valid) {
      const data: IBook = {
        id: this.isAdd ? null : this.id,
        name: form.value.name,
        price: form.value.price,
        publisher: form.value.publisher
      };
      if (this.isAdd) {
        this.bookService.createBook(data).subscribe(response => {
          this.router.navigate(['book-list'])
        });
      } else {
        this.bookService.editBook(data).subscribe(response => {
          this.router.navigate(['book-list'])
        });
      }
    }
  }

  cancel() {
    this.router.navigate(['book-list']);
  }
}

