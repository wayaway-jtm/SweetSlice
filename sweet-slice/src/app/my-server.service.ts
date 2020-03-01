import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class myServer {

  constructor(private http : HttpClient) { }

  myPath = 'http://localhost:3000/ingredients';

  //returns an array of all defined ingredients as objects. 
  getAllIngredients () {
    return this.http
      .get(`${this.myPath}/all`, 
        { responseType: "json"}
      );
  }

  //returns an array of all IDs currently in use. 
  getAllIDs () {
    return this.http
      .get(`${this.myPath}/ids`, 
        { responseType: "json"}
      );
  }

  //returns an array of all types currently in use. 
  getAllTypes () {
    return this.http
      .get(`${this.myPath}/types/all`, 
        { responseType: "json"}
      );
  }

  //returns an array of all names currently in use.
  getAllNames () {
    return this.http
      .get(`${this.myPath}/names/all`, 
        { responseType: "json"}
      );
  }

  //returns an array of all ingredients with the given type, as objects.
  getAllOfType (typeName : string) {
    return this.http
      .get(`${this.myPath}/types/${typeName}/all`, 
        { responseType: "json"}
      );
  }

  /* This seems redundant with getIngredientProperty and its route. 
  //returns the name of the ingredient with the given ID. 
  getNameByID (id : string) {
    return this.http
      .get(`${this.myPath}/names/${id}`, 
        { responseType: "json"}
      );
  }
  */

  //returns the selected property ("name", "type", or "cost") of the ingredient with the ID provided
  getIngredientProperty (id : string, property : string) {
    return this.http
      .get(`${this.myPath}/${id}/${property}`, 
        { responseType: "json"}
      );
  }

  /* These routes aren't actually built yet. They also don't seem to have any use case. 
  //returns all the costs. 
  getCosts () {
    return this.http
      .get(`${this.myPath}/costs/all`, 
        { responseType: "json"}
      );
  }

  //returns the cost of the selected ingredient. 
  //This seems redundant with getIngredientProperty and its route. 
  getCostByID (amount : number) {
    return this.http
      .get(`${this.myPath}/costs/${amount}`, 
        { responseType: "json"}
      );
  }
  */

}
