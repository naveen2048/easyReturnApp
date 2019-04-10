import { reasonForReturn } from './../../models/returnReason.model';
import { Component, OnInit, Input } from '@angular/core';
import { IOrderModel } from 'src/app/models/order.model';

@Component({
  selector: 'app-order-line-items',
  templateUrl: './order-line-items.component.html',
  styleUrls: ['./order-line-items.component.scss']
})
export class OrderLineItemsComponent implements OnInit {

  @Input('orders') orders: IOrderModel[];
  reasons = reasonForReturn;
  

  constructor() { }

  ngOnInit() {
  }
}