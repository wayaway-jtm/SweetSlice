import express from "express";
import ingredientList from "./ingredients"
import isUndefined from "util";



const ingredientEndpts = express.Router();
//#region HTML requests
// Get all ingredients
ingredientEndpts.get('/all', (req, res) => {
    res.status(200).json(ingredientList);
});

/**
 * Responds with 200 and all valid ingredient ids
 */
ingredientEndpts.get('/ids', (req, res) => {
    res.status(200).json(ingredientList.map(i => i.id));
});

//#region Types
/** 
 * Responds with all valid types
 */
ingredientEndpts.get('/types/all', (req, res) => {
    res.status(200).json(ingredientList.filter(i => isFirstOfType(i.type, ingredientList.indexOf(i))));
});

/**
 * Responds with 200 and all ingredients of a given type or
 * 400 and an error message if given type is not found
 */
ingredientEndpts.get('/types/:typeName/all', (req, res) => {
    if (isValidType(req.params.typeName)) {
        res.status(200).json(ingredientList.filter(i => i.type.toLowerCase() === lcaseType));
    } else {
        res.status(400).json(`Type ${req.params.typeName} not found`);
    }
});

function isFirstOfType(typeName, index) {
    return ingredientList.find(i => i.type === typeName) === index;
}
//#endregion
//#region Names
ingredientEndpts.get('/names/all', (req, res) => {
    res.status(200).json(ingredientList.map(i => i.name));
});

//Grady: I don't understand why this returns an array. Aren't IDs unique?
ingredientEndpts.get('/names/:ingrId', (req, res) => {
    let lcaseId = req.params.ingrId.toLowerCase();
    res.status(200).json(ingredientList.find(i => i === lcaseId));
});
//#endregion
//#region Individual Ingredient
ingredientEndpts.get('/:id/:propName', (req, res) => {
    if (isValidId(req.params.id)) {
        res.status(200).json(ingredientList.find(i => i === lcaseId)[req.params.propName]);
    } else {
        res.status(400).json(`Ingredient with ID ${req.params.id} not found`);
    }
});
//#endregion
//#region Cost
ingredientEndpts.get('/costs/all', (req, res) => {

});

ingredientEndpts.get('/costs/:num', (req, res) => {

});
//#endregion
//#region Validation
function isValidId(id) {
    let lcaseId = id.toLowerCase();
    return !isUndefined(ingredientList.find(i => i.id === lcaseId));
}

function isValidName(name) {
    let lcaseName = name.toLowerCase();
    return !isUndefined(ingredientList.find(i => i.name === lcaseName));
}

function isValidType(typeName) {
    let lcaseType = typeName.toLowerCase();
    return !isUndefined(ingredientList.find(i => i.type === lcaseType));
}

function isValidCost(cost) {
    return !isUndefined(ingredientList.find(i => i.cost === cost));
}
//#endregion
//#endregion