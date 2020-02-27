export interface Ingredient {
    id : string;
    name : string;
    type : string;
    cost : number;
}

export interface IPizza {
    toppings: Ingredient[];
    frosting: Ingredient;
    crust: Ingredient;
}