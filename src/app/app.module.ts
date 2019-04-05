import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderSearchComponent } from './components/order-search/order-search.component';
import { OrderLineItemsComponent } from './components/order-line-items/order-line-items.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderSearchComponent,
    OrderLineItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
