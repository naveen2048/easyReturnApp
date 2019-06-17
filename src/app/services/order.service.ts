import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IToken } from '../models/token.model';
import {
  IOrderRequestModel,
  IOrderModel,
  IReturnModel
} from '../models/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public Token: IToken;

  constructor(private http: HttpClient) {}

  getShopToken(shop: string): any {
    return this.http.get(environment.BASE_URI + 'shop/' + shop).subscribe(
      (data: IToken) => {
        this.Token = data[0];
        return true;
      },
      error => {
        return false;
      }
    );
  }

  getOrder(request: IOrderRequestModel): Observable<any> {
    return this.http
      .post(environment.BASE_URI + 'api/order', request)
      .pipe((data: any) => data);
  }

  getProductsImages(productids: any) {
    const request = {
      shop: this.Token.shop,
      token: this.Token.token,
      productids
    };

    return this.http
      .post(environment.BASE_URI + 'api/order/product_images', request)
      .pipe((data: any) => data);
  }

  submitRefund(request: IReturnModel): Observable<any> {
    return this.http
      .post(environment.BASE_URI + 'api/order/refund', request)
      .pipe(data => data as any);
  }

  getAdminOrders(): Observable<any> {
    return this.http
      .get(environment.BASE_URI + 'api/order/admin')
      .pipe(d => <any>d);
  }
}
