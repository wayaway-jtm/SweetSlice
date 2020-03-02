import { Component, OnInit, Input } from '@angular/core';
import { IPizza, IIngredient } from '../interfaces'
import { MyCartService } from '../my-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  crust: IIngredient;
  frosting: IIngredient;
  toppings: IIngredient;
  name: string;
  id: number;
  type: string;
  cost: number;


@Input() cart : IPizza;

  constructor(private service : MyCartService) { }

  ngOnInit(): void {
  }
 
}
