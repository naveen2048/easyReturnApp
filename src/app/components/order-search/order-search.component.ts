import { IReturnModel } from './../../models/order.model';
import { Component, OnInit } from '@angular/core';
import { IOrderModel } from 'src/app/models/order.model';

@Component({
	selector: 'app-order-search',
	templateUrl: './order-search.component.html',
	styleUrls: [ './order-search.component.scss' ]
})
export class OrderSearchComponent implements OnInit {
	emailOrphone: string;
	orderNo: any;

	// orders:IOrderModel[] = [
	//   { title: "T-Shirt", description: "This is fancy", image: "https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg", quantity: 2, reasonforreturn: "", returnquantity:0, notes: "" },
	//   { title: "Salwar", description: "Indian Traditional dress", image: "https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg", quantity: 1,reasonforreturn: "", returnquantity:0, notes: "" }
	// ];

	orders: IReturnModel = {
		notes: '',
		notificationEmail: '',
		returnMethod: '',
		bankName: '',
		bankBranch: '',
		ifscCode: '',
		accountName: '',
		orderitems: [
			{
				title: 'T-Shirt',
				description: 'This is fancy',
				image: 'https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg',
				quantity: 2,
				reasonforreturn: '',
				returnquantity: 0,
				notes: ''
			},
			{
				title: 'Salwar',
				description: 'Indian Traditional dress',
				image: 'https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg',
				quantity: 1,
				reasonforreturn: '',
				returnquantity: 0,
				notes: ''
			}
		]
	};

	_orders: IReturnModel;

	constructor() {
		// this._orders = new IReturnModel();
		// this._orders.orderitems.push({ title: "T-Shirt", description: "This is fancy", image: "https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg", quantity: 2, reasonforreturn: "", returnquantity:0, notes: "" });
		// this._orders.orderitems.push({ title: "Salwar", description: "Indian Traditional dress", image: "https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg", quantity: 1,reasonforreturn: "", returnquantity:0, notes: "" });
	}

	ngOnInit() {}

	searchOrder() {
		alert('Searching Order...');
	}
}
