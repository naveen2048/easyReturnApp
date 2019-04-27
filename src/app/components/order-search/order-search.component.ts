import { IReturnModel, IOrderRequestModel } from './../../models/order.model';
import { Component, OnInit } from '@angular/core';
import { IOrderModel } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
	selector: 'app-order-search',
	templateUrl: './order-search.component.html',
	styleUrls: [ './order-search.component.scss' ]
})
export class OrderSearchComponent implements OnInit {
	emailOrphone: string;
	orderNo: any;
	orders: IReturnModel = {
		notes: '',
		notificationEmail: '',
		returnMethod: 'refund',
		bankName: '',
		bankBranch: '',
		ifscCode: '',
		accountName: '',
		orderitems: []
  };
  showLoader:boolean = false;

	constructor(private orderService: OrderService) { }

	ngOnInit() { this.getToken(); }

	searchOrder() {
   this.showLoader = true;
   this.orders = { orderitems: [] } as IReturnModel;

   var result = this.orderService
       .getOrder({ shop: this.orderService.Token.shop, email: this.emailOrphone, order_number: this.orderNo, token: this.orderService.Token.token  })
       .subscribe((data:any) => {
         //console.log(data)

         let productids = data.orders[0].line_items.map(d => {
               return d.product_id
         }).join(',');

        // Product images API call
         this.orderService.getProductsImages(productids).subscribe((images:any) => {
          data.orders[0].line_items.forEach(d => {
            this.orders.orderitems.push(
            {
              title: d.title,
              description: d.name,
              image: images.products.length == 0 ? '' : images.products.map(i => {
                if(i.images.length > 0 && (i.images[0].product_id == d.product_id)){
                  return i.images[0].src;
                }
                //else {return '../../../assets/images/noimage.png'}
              })
              ,
              quantity: d.quantity,
              reasonforreturn: '',
              returnquantity: d.quantity,
              notes: '',
              product_id: d.product_id
              })
           });
           this.showLoader = false;
         });
       });
  }
  
  getToken(){
    //TODO: Remove hard-coded value in getShopToken. This will be passed in as parameter
   var result = this.orderService
        .getShopToken('meesala-store.myshopify.com');
  }
}
