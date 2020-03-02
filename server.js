import ingredientEndpts from "./ingredientsAPI.js";
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

// Get the request data as an object
app.use(express.json());

// Run static content in public directory
app.use(express.static("./sweet-slice/public"));

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

// Allow us to access the API from different domains
 app.use(cors());

// use ingredients api module for handling facts
app.use("/ingredients", ingredientEndpts);

// Allows the use of Angular paths in address bar
/*
    MUST FOLLOW ALL OTHER PATH SPECIFIERS
*/
app.use("/*", express.static("./sweet-slice/public"));