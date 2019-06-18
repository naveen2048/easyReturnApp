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
  showLoader = false;

  constructor(private adminService: OrderService) {
    this.showLoader = true;
    this.adminService.getAdminOrders().subscribe(d => {
      this.orders = d;
      this.showLoader = !this.showLoader;
    });
  }

  ngOnInit() {

  }

}
