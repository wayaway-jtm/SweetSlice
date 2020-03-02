import { IPizza, IIngredient } from "./interfaces";

export class Ingredient implements IIngredient {
    id: string = '';
    name: string = '';
    type: string = '';
    cost: number = -1;
    selected?: boolean = false;

    constructor(baseIngredient?: IIngredient, isSelected: boolean = false) {
        this.id = baseIngredient.id;
        this.name = baseIngredient.name;
        this.type = baseIngredient.type;
        this.cost = baseIngredient.cost;
        this.selected = isSelected;
    }

    convertToInterface(): IIngredient {
        return {
            id: this.id,
            name: this.name,
            type: this.type,
            cost: this.cost
        }
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