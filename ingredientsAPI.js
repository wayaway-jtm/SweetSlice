import express from "express";
import ingredientList from "./ingredients.js"
import isUndefined from "util";



const ingredientEndpts = express.Router();
//#region HTML requests

/**
 * Responds with 200 and all ingredients
 */
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
 * Responds with 200 all valid types
 */
ingredientEndpts.get('/types/all', (req, res) => {
    let typeArray = []
    for (const ingredient of ingrendientList) {
        if (!typeArray.includes(ingredient.type)) {
            typeArray.push(ingredient.type);
        }
    }
    res.status(200).json(typeArray);
});

/**
 * Responds with 200 and all ingredients of a given type or
 * 400 and an error message if given type is not found
 */
ingredientEndpts.get('/types/:typeName/all', (req, res) => {
    if (isValidType(req.params.typeName)) {
        res.status(200).json(ingredientList.filter(i => i.type === req.params.typeName.toLowerCase()));
    } else {
        res.status(404).json(`Type ${req.params.typeName} not found`);
    }
});

function isFirstOfType(typeName, index) {
    return ingredientList.find(i => i.type === typeName) === index;
}
//#endregion
//#region Names

/**
 * Responds with 200 and the names of all ingredients
 */
ingredientEndpts.get('/names/all', (req, res) => {
    res.status(200).json(ingredientList.map(i => i.name));
});
//#endregion
//#region Individual Ingredient

/**
 * Responds with 200 and the specified ingredient or
 * 400 and an error message if given ID is not found
 */
ingredientEndpts.get('/:id/', (req, res) => {
    if (isValidId(req.params.id)) {
        res.status(200).json(ingredientList.find(i => i.id === req.params.id.toLowerCase()[0]));
    } else {
        res.status(404).json(`Ingredient with ID ${req.params.id} not found`);
    }
});

/**
 * Responds with 200 and the specified property of the specified ID or
 * 404 and an error message if given ID or property is not found
 */
ingredientEndpts.get('/:id/:propName', (req, res) => {
    if (isValidId(req.params.id)) {
        let lcaseId = req.params.id.toLowerCase();
        let lcasePropName = req.params.propName.toLowerCase();
        let ingredient = ingredientList.find(i => i === lcaseId)[0];
        if (ingredient.hasOwnProperty(lcasePropName)) {
            res.status(200).json(ingredient[lcasePropName]);
        } else {
            res.status(400).json(`${req.params.propName} is not a valid property name`);
        }
    } else {
        res.status(404).json(`Ingredient with ID ${req.params.id} not found`);
    }
});
//#endregion
//#region Cost

/**
 * Responds with 200 and all unique costs (prices)
 */
ingredientEndpts.get('/costs/all', (req, res) => {
    let costArray = []
    for (const ingredient of ingrendientList) {
        if (!costArray.includes(ingredient.cost)) {
            costArray.push(ingredient.cost);
        }
    }
    res.status(200).json(costArray);
});

/**
 * Responds with 200 and all ingredients with the specified cost or
 * 400 and an error message if given argument is not a number or
 * 404 and an error message if no ingredients are found with given cost
 */
ingredientEndpts.get('/costs/:num', (req, res) => {
    let num = Number.parseFloat(req.params.num);
    // Testing if :num is a valid number
    if (!Number.isNaN(num)) {
        // Testing if any ingredients were found with given cost
        if (isValidCost(num)) {
            res.status(200).json(ingredientList.filter(i => i.cost === num));
        } else {
            res.status(404).json(`No ingredient found with cost of ${num}`);
        }
    } else {
        res.status(400).json(`${req.params.num} is not a valid cost`);
    }
});
//#endregion
//#region Validation

/**
 * Checks whether or not an ingredient exists with the given id
 * @param {*} id An ingredient's id property
 * @returns {Boolean} Whether or not an ingredient exists with given id
 */
function isValidId(id) {
    let lcaseId = id.toLowerCase();
    return !isUndefined(ingredientList.find(i => i.id === lcaseId));
}

/**
 * Checks whether or not an ingredient exists with the given name
 * @param {*} name An ingredient's name property
 * @returns {Boolean} Whether or not an ingredient exists with given name
 */
function isValidName(name) {
    let lcaseName = name.toLowerCase();
    return !isUndefined(ingredientList.find(i => i.name === lcaseName));
}

/**
 * Checks whether or not an ingredient exists with the given type
 * @param {*} typeName An ingredient's type property
 * @returns {Boolean} Whether or not an ingredient exists with given type
 */
function isValidType(typeName) {
    let lcaseType = typeName.toLowerCase();
    return !isUndefined(ingredientList.find(i => i.type === lcaseType));
}

/**
 * Checks whether or not an ingredient exists with the given cost
 * @param {*} cost An ingredient's cost property
 * @returns {Boolean} Whether or not an ingredient exists with given cost
 */
function isValidCost(cost) {
    return !isUndefined(ingredientList.find(i => i.cost === cost));
}
//#endregion
//#endregion

export default ingredientEndpts;