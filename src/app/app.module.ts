import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderSearchComponent } from './components/order-search/order-search.component';
import { OrderLineItemsComponent } from './components/order-line-items/order-line-items.component';
import { OrderReturnsComponent } from './components/admin/order-returns/order-returns.component';
import { OrderService } from './services/order.service';
import { SharedComponent } from './components/shared/shared.component';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { ImageLoaderComponent } from './components/shared/image-loader/image-loader.component';
import { NotificationService } from './services/notification.service';

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
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [
    OrderService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
