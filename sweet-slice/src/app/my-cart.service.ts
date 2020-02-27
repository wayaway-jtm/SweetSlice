import { Injectable } from '@angular/core';
import { IPizza, Ingredient } from './interfaces';

@Injectable({
  providedIn: 'root'
})

export class MyCartService {

  constructor() { }

  cart : IPizza[];

  //creates a new pizza and adds it to the cart. Takes ingredients in the order crust, frosting, topping, topping, etc. 
  addPizza (myCrust : Ingredient, myFrosting : Ingredient, ...myToppings : Ingredient[]) {
    this.cart.push(
      {
        crust : myCrust,
        frosting : myFrosting,
        toppings : myToppings
      }
    )
  }

}
