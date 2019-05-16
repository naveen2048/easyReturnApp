import { reasonForReturn } from './../../models/returnReason.model';
import { Component, OnInit, Input } from '@angular/core';
import { IOrderModel, IReturnModel } from 'src/app/models/order.model';
import { AppConstants } from 'src/app/models/common.model';

@Component({
	selector: 'app-order-line-items',
	templateUrl: './order-line-items.component.html',
	styleUrls: [ './order-line-items.component.scss' ]
})
export class OrderLineItemsComponent implements OnInit {
	@Input('orders') orders: IReturnModel;
	reasons = reasonForReturn;
	refundMethods = AppConstants.refundMethods;
  refund:boolean;

	constructor() {}

  ngOnInit() {}

  refundSelect(item){
    this.refund = false;
    this.orders.orderitems.forEach(d => {
      if(d.returnMethod.toLocaleLowerCase() === 'bank'){
        this.refund = true;
      }
    });

    if(!this.refund){
      //clear the bank details, if any, as no bank option is selected
      this.orders.accountName = '';
      this.orders.accountNumber = '';
      this.orders.bankName = '';
      this.orders.bankBranch = '';
      this.orders.ifscCode = '';
    }
  }
}
