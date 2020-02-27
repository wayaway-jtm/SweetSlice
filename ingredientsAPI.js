import express from "express";
import ingredientList from "./ingredients"
import isUndefined from "util";



const ingredientEndpts = express.Router();
//#region HTML requests
// Get all ingredients
ingredientEndpts.get('/all', (req, res) => {
    res.status(200).json(ingredientList);
});

// Get all ingredient ids
ingredientEndpts.get('/ids', (req, res) => {
    res.status(200).json(ingredientList.map(i => i.id));
});

//#region Types
// Returns all valid types
ingredientEndpts.get('/types/all', (req, res) => {
    res.status(200).json(ingredientList.filter(i => isFirstOfType(i.type, ingredientList.indexOf(i))));
});

ingredientEndpts.get('/types/:typeName/all', (req, res) => {
    let lCaseType = req.params.toLowerCase();
    if (isUndefined(ingredientList.find(i => i.type.toLowerCase() === lCaseType))) {
        res.status(400).json(`Type ${req.params.typeName} not found`);
    } else {
        res.status(200).json(ingredientList.filter(i => i.type.toLowerCase() === lCaseType));
    }
});

function isFirstOfType(typeName, index) {
    return ingredientList.find(i => i.type === typeName) === index;
}
//#endregion
//#region Names
ingredientEndpts.get('/names/all', (req, res) => {
    let resArray = [];
    for (const ingredient of ingredientList) {
        resArray.push(ingredient.name);
    }
    res.status(200).json(resArray);
});

ingredientEndpts.get('/names/:ingrId', (req, res) => {
    let resArray = [];
    for (const ingredient of ingredientList) {
        resArray.push(ingredient.name);
    }
    res.status(200).json(resArray);
});
//#endregion
//#region Individual Ingredient
ingredientEndpts.get('/:id/name', (req, res) => {

});

ingredientEndpts.get('/:id/type', (req, res) => {

});

ingredientEndpts.get('/:id/cost', (req, res) => {

});
//#endregion
//#region Cost
ingredientEndpts.get('/costs/all', (req, res) => {

});
ingredientEndpts.get('/costs/:num', (req, res) => {

});
//#endregion
//#endregion