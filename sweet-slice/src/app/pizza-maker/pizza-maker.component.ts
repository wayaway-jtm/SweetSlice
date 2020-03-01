import { Component, OnInit } from '@angular/core';
import { myServer } from '../my-server.service';
import { IIngredient, IPizza } from '../interfaces';
import { Ingredient, Pizza } from '../classes';
import { FormGroup, FormControl } from '@angular/forms';

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
  _customPizza: Pizza = new Pizza();
  _pizzaForm: FormGroup = new FormGroup({
    toppings: new FormGroup({}),
    frostings: new FormGroup({}),
    crusts: new FormGroup({}),
  });
  constructor(private server: myServer) { }

  ngOnInit(): void {
    // Getting all the different type names
    this.server.getAllTypes().subscribe((data: string[]) => this._types = data);
    // Getting ingredients by each type so filtering isn't needed later
    this.server.getAllOfType('topping').subscribe((data: IIngredient[]) => this._toppings = data);
    this.server.getAllOfType('frosting').subscribe((data: IIngredient[]) => this._frostings = data);
    this.server.getAllOfType('crust').subscribe((data: IIngredient[]) => this._crusts = data);
    // Creating FormControls for each ingredient
    for (const topping of this._toppings) {
      this._pizzaForm.addControl(topping.name, new FormControl(topping.name));
    }
    for (const frosting of this._frostings) {
      this._pizzaForm.addControl(frosting.name, new FormControl(frosting.name));
    }
    for (const crust of this._crusts) {
      this._pizzaForm.addControl(crust.name, new FormControl(crust.name));
    }
  }

}
