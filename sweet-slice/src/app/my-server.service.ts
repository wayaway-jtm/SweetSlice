import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class myServer {

  constructor(private http: HttpClient) { }

  myPath = 'http://localhost:3000/ingredients';

  //returns an array of all defined ingredients as objects. 
  getAllIngredients() {
    let ingredients = [];
    this.http
      .get(`${this.myPath}/all`,
        { responseType: "json" }
      ).subscribe(
        (data: any) => {
          console.log(data);
          ingredients = data;
        },
        err => console.log('Error: ', err),
        () => { return ingredients; });
  }

  //returns an array of all IDs currently in use. 
  getAllIDs() {
    return this.http
      .get(`${this.myPath}/ids`,
        { responseType: "json" }
      );
  }

  //returns an array of all types currently in use. 
  getAllTypes() {
    return this.http
      .get(`${this.myPath}/types/all`,
        { responseType: "json" }
      );
  }

  //returns an array of all names currently in use.
  getAllNames() {
    return this.http
      .get(`${this.myPath}/names/all`,
        { responseType: "json" }
      );
  }

  //returns an array of all ingredients with the given type, as objects.
  getAllOfType(typeName: string) {
    return this.http
      .get(`${this.myPath}/types/${typeName}/all`,
        { responseType: "json" }
      );
  }

  //returns the selected property ("name", "type", or "cost") of the ingredient with the ID provided
  getIngredientProperty(id: string, property: string) {
    return this.http
      .get(`${this.myPath}/${id}/${property}`,
        { responseType: "json" }
      );
  }

  //returns all the costs. 
  getCosts() {
    return this.http
      .get(`${this.myPath}/costs/all`,
        { responseType: "json" }
      );
  }
}
