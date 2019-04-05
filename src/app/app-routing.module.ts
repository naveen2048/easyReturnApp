import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderSearchComponent } from './components/order-search/order-search.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch: 'full' },
  { path:'home', component: OrderSearchComponent },
  { path:'**', redirectTo:'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
