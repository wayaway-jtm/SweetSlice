import { Component, OnInit } from '@angular/core';
// import { SERVICEPLACEHOLDER } from '_____/______';

@Component({
  selector: 'app-pizza-maker',
  templateUrl: './pizza-maker.component.html',
  styleUrls: ['./pizza-maker.component.css']
})
export class PizzaMakerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
//initialize the array getting the items from the service  

// Setting pizza service to pizza array to ngfor through

// export class PuppyListComponent implements OnInit {
//   puppies : IPuppy[];
//   constructor(public service : PuppyFinderService) { }


//   ngOnInit(): void {
//     this.puppies = this.service.getPuppy();
//   }

// }
