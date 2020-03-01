import { Component, OnInit } from '@angular/core';
import { myServer } from '../my-server.service';

@Component({
  selector: 'app-pizza-maker',
  templateUrl: './pizza-maker.component.html',
  styleUrls: ['./pizza-maker.component.css']
})
export class PizzaMakerComponent implements OnInit {



  constructor(private service: myServer) { }

  ngOnInit() {
this.service.getAllIngredients();
  
  }

}
//initialize the array getting the items from the service  

// Setting pizza service to pizza array to ngfor through


