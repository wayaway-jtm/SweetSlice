import { Component, OnInit } from '@angular/core';
import { myServer } from '../my-server.service';

@Component({
  selector: 'app-pizza-maker',
  templateUrl: './pizza-maker.component.html',
  styleUrls: ['./pizza-maker.component.css']
})
export class PizzaMakerComponent implements OnInit {

  constructor(private server: myServer) { }

  ngOnInit(): void {
    this.server.getAllIngredients();
  }

}
