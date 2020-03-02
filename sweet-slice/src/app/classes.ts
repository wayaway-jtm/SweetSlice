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
    frosting: IIngredient;
    crust: IIngredient;
    toppingsTotal: number = 0;

    constructor(basePizza?: IPizza, toppingsTotal: number = 0) {
        this.toppings = basePizza.toppings;
        this.frosting = basePizza.frosting;
        this.crust = basePizza.crust;

        for (const topping of this.toppings) {
            this.toppingsTotal += topping.cost;
        }
    }
}