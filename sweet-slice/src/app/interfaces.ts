export interface IIngredient {
    id : string;
    name : string;
    type : string;
    cost : number;
}

export interface IPizza {
    toppings: IIngredient[];
    frosting: IIngredient;
    crust: IIngredient;
}