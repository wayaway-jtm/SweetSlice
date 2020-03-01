import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaMakerComponent } from './pizza-maker/pizza-maker.component';


const routes: Routes = [
  {
    path: 'pizzamaker',
    component: PizzaMakerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
