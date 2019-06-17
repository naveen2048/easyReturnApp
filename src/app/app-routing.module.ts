import { OrderReturnsComponent } from './components/admin/order-returns/order-returns.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderSearchComponent } from './components/order-search/order-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'admin', component: OrderReturnsComponent },
  { path: 'shop/:shop', component: OrderSearchComponent },
  { path: 'home', component: OrderSearchComponent },
  { path: 'shopify', redirectTo: 'admin' },
  { path: 'shopify/**/', redirectTo: 'admin' },
  // { path: '**', redirectTo: 'admin' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
