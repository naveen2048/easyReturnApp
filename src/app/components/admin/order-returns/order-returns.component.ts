import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-order-returns',
  templateUrl: './order-returns.component.html',
  styleUrls: ['./order-returns.component.scss']
})
export class OrderReturnsComponent implements OnInit {

  orders: any[] = [];
  searchText = "";
  showLoader = false;

  constructor(private adminService: OrderService,
      private commonService: CommonService) {
    this.showLoader = true;
    this.adminService.getAdminOrders().subscribe(d => {
      this.orders = d;
      this.showLoader = !this.showLoader;
    });
  }

  ngOnInit() {

  }

  showDetails(order) {
    this.commonService.toggleSideSheet(true, order);
  }

}
