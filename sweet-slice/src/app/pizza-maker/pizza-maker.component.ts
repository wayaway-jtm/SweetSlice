import { Component, OnInit } from '@angular/core';
import { myServer } from '../my-server.service';
import { IIngredient, IPizza } from '../interfaces';
import { Ingredient, Pizza } from '../classes';
import { MyCartService } from '../my-cart.service';

@Component({
  selector: 'app-pizza-maker',
  templateUrl: './pizza-maker.component.html',
  styleUrls: ['./pizza-maker.component.css']
})
export class PizzaMakerComponent implements OnInit {
  _toppings: Ingredient[] = [];
  _frostings: Ingredient[] = [];
  _crusts: Ingredient[] = [];
  _types: string[] = [];

  selectedFrosting: IIngredient;
  selectedCrust: IIngredient;

  constructor(private server: myServer, private cart: MyCartService) {
    // Getting all the different type names
    this.server.getAllTypes().subscribe((data: string[]) => this._types = data);
    // Getting ingredients by each type so filtering isn't needed later
    this.server.getAllOfType('topping').subscribe((data: IIngredient[]) => {
      for (const iIngredient of data) {
        this._toppings.push(new Ingredient(iIngredient));
      }
    });
    this.server.getAllOfType('frosting').subscribe(
      (data: IIngredient[]) => {
        for (const iIngredient of data) {
          this._frostings.push(new Ingredient(iIngredient));
        }
      });
    this.server.getAllOfType('crust').subscribe(
      (data: IIngredient[]) => {
        for (const iIngredient of data) {
          this._crusts.push(new Ingredient(iIngredient));
        }
      });
  }

  ngOnInit(): void { }

  addToCart() {
    // Converting toppings into interfaces
    let toppingInterfaces: IIngredient[] = [];
    for (const ingredient of this._toppings.filter(i => i.selected)) {
      toppingInterfaces.push(ingredient.convertToInterface());
    }
    // Adding pizza to cart
    this.cart.addPizza(this._crusts.find(i => i.selected).convertToInterface(),
                        this._frostings.find(i => i.selected).convertToInterface(),
                        toppingInterfaces);
  }

  chooseFrosting(chosenFrosting: Ingredient) {
    this.selectedFrosting = chosenFrosting;
  }

  chooseCrust(chosenCrust: Ingredient) {
    this.selectedCrust = chosenCrust;
  }
}
