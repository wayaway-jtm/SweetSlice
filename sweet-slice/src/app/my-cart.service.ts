import { Injectable } from '@angular/core';
import { IPizza } from './interfaces';

@Injectable({
  providedIn: 'root'
})

export class MyCartService {

  constructor() { }

  cart : IPizza[];

}
