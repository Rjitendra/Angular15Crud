import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOrder } from '../../model/order';
import { OrderService } from '../../service/order.service';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders!: IOrder[];

  constructor(private orderService: OrderService,private router:Router) { }

    ngOnInit(): void {
      this.orderService.getOrders().subscribe((res => {
        this.orders = res;
      }));
    }

    orderEdit(order:IOrder){
      this.router.navigate(['edit/'+order.id])
    }
    
    orderBook(book:IOrder): void {
      this.orderService.deleteOrder(book.id as number).subscribe((res => {
        this.orders = this.orders.filter(x => x.id !== book.id);
      }));
  
    }

}