import { IPizza, IIngredient } from "./interfaces";

export class Ingredient implements IIngredient {
    id: string = '';
    name: string = '';
    type: string = '';
    cost: number = -1;

    constructor() {
    }
}

export class Pizza implements IPizza {
    toppings: IIngredient[] = [];
    frosting: IIngredient = new Ingredient();
    crust: IIngredient = new Ingredient();

    constructor() {
    }

    addToPizza(newIngredient: IIngredient) {
        switch (newIngredient.type.toLowerCase()) {
            case 'topping':
                this.toppings.push(newIngredient);
                break;
            case 'frosting':
                this.frosting = newIngredient;
                break;
            case 'crust':
                this.crust = newIngredient;
                break;
        }
    }
}