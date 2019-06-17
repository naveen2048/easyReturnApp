import { IReturnModel, IOrderRequestModel } from './../../models/order.model';
import { Component, OnInit } from '@angular/core';
import { IOrderModel } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.scss']
})
export class OrderSearchComponent implements OnInit {
  emailOrphone: string;
  orderNo: any;
  orders: IReturnModel = {
    orderNumber:'',
    notes: '',
    notificationEmail: '',
    bankName: '',
    bankBranch: '',
    ifscCode: '',
    accountName: '',
    accountNumber:'',
    orderitems: []
  };
  showLoader = false;

  constructor(
    private orderService: OrderService,
    private notification: NotificationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getToken();
  }

  searchOrder() {
    this.showLoader = true;
    this.orders = {
      orderNumber:'',
      notes: '',
      notificationEmail: '',
      bankName: '',
      bankBranch: '',
      ifscCode: '',
      accountName: '',
      accountNumber:'',
      orderitems: []
    };

    const result = this.orderService
      .getOrder({
        shop: this.orderService.Token.shop,
        email: this.emailOrphone,
        order_number: this.orderNo,
        token: this.orderService.Token.token
      })
      .subscribe(
        (data: any) => {
          if (data.orders.length === 0) {
            this.showLoader = false;
            this.notification.showError('Something went wrong, please try again.');
            return;
          }

          const productids = data.orders[0].line_items
            .map(d => {
              return d.product_id;
            })
            .join(',');

          // Product images API call
          this.orderService
            .getProductsImages(productids)
            .subscribe((images: any) => {
              data.orders[0].line_items.forEach(d => {
                this.orders.orderitems.push({
                  title: d.title,
                  description: d.name,
                  image:
                    images.products.length === 0
                      ? ''
                      : images.products.map(i => {
                          if (
                            i.images.length > 0 &&
                            i.images[0].product_id === d.product_id
                          ) {
                            return i.images[0].src.indexOf('.')
                              ? i.images[0].src
                              : '../../../assets/images/noimage.png';
                          }
                        }),
                  quantity: d.quantity,
                  reasonforreturn: '',
                  returnquantity: d.quantity,
                  notes: '',
                  product_id: d.product_id,
                  returnMethod:''
                });
              });
              this.showLoader = false;

              //update the Notification email & Order number to model to back track in Admin
              this.orders.notificationEmail = this.emailOrphone;
              this.orders.orderNumber = this.orderNo;

              //Clear the search fields, for next search if any
              this.emailOrphone = '';
              this.orderNo = '';
            });
        },
        error => {
          this.showLoader = false;
          this.notification.showError(error.error.error);
        }
      );
  }

  getToken() {
    // TODO: Remove hard-coded value in getShopToken. This will be passed in as parameter
    const result = this.orderService.getShopToken(
      'meesala-store.myshopify.com'
    );
  }

  submit() {
    this.orderService.submitRefund(this.orders)
        .subscribe((d) => {
          this.router.navigate(['/']);
        });
  }
}
