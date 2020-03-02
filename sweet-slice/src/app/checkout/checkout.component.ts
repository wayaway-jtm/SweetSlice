import { Component, OnInit } from '@angular/core';
import { MyCartService } from '../my-cart.service';
import { IPizza } from '../interfaces';
import { Pizza } from '../classes';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public cart: Pizza[] = [];
  public tipAmnt = 0;
  public subTotal = 0;
  public tax = 0;
  public orderTotal = 0;

  constructor(private cartService: MyCartService) { }

  ngOnInit(): void {
    for (const pizza of this.cartService.cart) {
      this.cart.push(new Pizza(pizza));
    }

    for (const pizza of this.cart) {
      this.subTotal += pizza.getCost();
    }

    this.tax = this.subTotal * 0.06;
    this.updateTotal();
  }

  updateTotal() {
    this.orderTotal = this.subTotal + this.tax + this.tipAmnt;
  }

}
