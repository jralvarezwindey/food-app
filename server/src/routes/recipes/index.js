const express = require('express');
const getRecipesProduction = require('./getRecipesProduction.js');
const getRecipesDevelopment = require('./getRecipesDevelopment.js');
const getRecipeDetail = require('./getRecipeDetail.js');
const postRecipe = require('./postRecipe.js');

// ----
const router = express.Router();

router.get('/', getRecipesProduction);
router.get('/detail/:id', getRecipeDetail);
router.post('/create', postRecipe);

module.exports = router;


