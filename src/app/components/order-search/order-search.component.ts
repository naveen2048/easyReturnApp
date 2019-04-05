import { Component, OnInit } from '@angular/core';
import { IOrderModel } from 'src/app/models/order.model';

@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.scss']
})
export class OrderSearchComponent implements OnInit {

  emailOrphone: string;
  orderNo:any;

  orders:IOrderModel[] = [
    { title: "T-Shirt", description: "This is fancy", image: "", qty: 2 },
    { title: "Salwar", description: "Indian Traditional dress", image: "", qty: 1 }
  ];

  constructor() { }

  ngOnInit() {
  }

  searchOrder(){
    alert("Searching Order...");
  }
}
