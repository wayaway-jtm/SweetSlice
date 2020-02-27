import express from "express";
import ingredientList from "./ingredients"



const ingredientEndpts = express.Router();

// Get all ingredients
ingredientEndpts.get('/all', (req, res) => {
    res.status(200).json(ingredientList);
});

// Get all ingredient ids
ingredientEndpts.get('/ids', (req, res) => {
    let resArray = [];
    for (const ingredient of ingredientList) {
        resArray.push(ingredient.id);
    }
    res.status(200).json(resArray);
});

// Get all ingredient types
ingredientEndpts.get('/types/all', (req, res) => {
    res.status(200).json(ingredientList.filter((v, i, a) => a.indexOf(v) === i));
});

ingredientEndpts.get('/', (req, res) => {
    
});

ingredientEndpts.get('/', (req, res) => {
    
});

ingredientEndpts.get('/', (req, res) => {
    
});