import { Component, OnInit, Input } from '@angular/core';
import { IIngredient } from '../interfaces';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  @Input() ingredient : IIngredient; 

  constructor() { }

  ngOnInit(): void {
  }

}
