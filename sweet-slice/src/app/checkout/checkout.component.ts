import { Component, OnInit, Input } from '@angular/core';
import { IPizza } from '../interfaces'
import { MyCartService } from '../my-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
@Input() cart : IPizza;

  constructor(private service : MyCartService) { }

  ngOnInit(): void {
  }
 
}
