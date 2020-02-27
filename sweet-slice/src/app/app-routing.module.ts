import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PizzaMakerComponent } from './pizza-maker/pizza-maker.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  {
    path: 'checkout',
    component: CheckoutComponent
  
  },
  {
    path: '**',
    component: PizzaMakerComponent
  
  }
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
