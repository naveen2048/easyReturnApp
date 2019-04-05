import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.scss']
})
export class OrderSearchComponent implements OnInit {

  emailOrphone: string;
  orderNo:any;

  constructor() { }

  ngOnInit() {
  }

  searchOrder(){
    alert("Searching Order...");
  }

}
