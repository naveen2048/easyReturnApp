import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-order-returns',
  templateUrl: './order-returns.component.html',
  styleUrls: ['./order-returns.component.scss']
})
export class OrderReturnsComponent implements OnInit {

  orders: any[] = [];
  searchText = "";

  constructor(private adminService: OrderService) {
    this.adminService.getAdminOrders().subscribe(d => {
      this.orders = d;
    });
  }

  ngOnInit() {

  }

}
