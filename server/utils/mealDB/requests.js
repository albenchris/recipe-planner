require('dotenv').config();
const { get } = require('axios');
const _ = require('lodash');

const log = console.log;


const getMealDbRecipe = () => {
  get(`https://www.themealdb.com/api/json/v1/1/random.php`, {
    headers: {
      'Accept': 'application/json',
      'Accept-Language': 'en',
    }
  })
    .then(res => {
      const recipe = res.data.meals[0]
      const recipeName = recipe.strMeal;
      const recipeIngredients = [];
      const recipeInstructions = recipe.strInstructions;

      

      const formattedRecipe = { recipeName, recipeIngredients, recipeInstructions };

      log(formattedRecipe);
    })
    .catch(err => console.error(err));
};

module.exports = { getMealDbRecipe };
