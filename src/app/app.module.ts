import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderSearchComponent } from './components/order-search/order-search.component';
import { OrderLineItemsComponent } from './components/order-line-items/order-line-items.component';
import { OrderReturnsComponent } from './components/admin/order-returns/order-returns.component';
import { OrderService } from './services/order.service';
import { SharedComponent } from './components/shared/shared.component';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { ImageLoaderComponent } from './components/shared/image-loader/image-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderSearchComponent,
    OrderLineItemsComponent,
    OrderReturnsComponent,
    SharedComponent,
    LoaderComponent,
    ImageLoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
