import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { IOrder, OrderType } from '../../model/order';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  myForm!: FormGroup;
  orderType = OrderType;
  enumKeys: string[] = [];
  id!: number;
  isAdd = false;
  isLoad = false;
  submitted = false;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.enumKeys = Object.keys(this.orderType);
  }

  ngOnInit(): void {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.isAdd = this.id ? false : true;
          if (!this.isAdd) {
            this.orderService.getOrderById(this.id).subscribe((res: IOrder) => {
              this.myForm = new FormGroup({
                description: new FormControl(res.description, Validators.required),
                value: new FormControl(res.value, Validators.required),
                type: new FormControl(res.type, Validators.required)
              });
              this.isLoad = true;
            })
          } else {
            this.isLoad = true;
            this.myForm = new FormGroup({
              description: new FormControl('', Validators.required),
              value: new FormControl('', Validators.required),
              type: new FormControl('', Validators.required)
            });
          }
        }
      );
  }

  get f(): { [key: string]: AbstractControl; } { return this.myForm.controls; }

  submit(form: FormGroup) {
    
    this.submitted = true;
    if (form.valid) {
      const data: IOrder = {
        id: this.isAdd ? null : this.id,
        description: form.value.description,
        value: form.value.value,
        type: form.value.type
      };
      if (this.isAdd) {
        this.orderService.createOrder(data).subscribe(response => {
          this.router.navigate(['/'])
        });
      } else {
        this.orderService.editOrder(data).subscribe(response => {
          this.router.navigate(['/'])
        });
      }
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }
}

