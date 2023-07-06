// Server
require('dotenv').config();
const { get } = require('axios');
const _ = require('lodash');
// const { red, yellow, blue, cyan } = import('chalk');
const log = console.log;

const edamam = 'https://api.edamam.com/api'

const EDAMAM_APP_ID = process.env.EDAMAM_APP_ID;
const EDAMAM_APP_KEY = process.env.EDAMAM_APP_KEY;
const requiredText = `type=public&app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_APP_KEY}`
const query = 'eggs'
const mealType = 'breakfast'
const random = true

get(`${edamam}/recipes/v2?q=${query}&mealType=${mealType}&random=${random}&${requiredText}`, {
  headers: {
    'Accept': 'application/json',
    'Accept-Language': 'en',
  }
})
  .then(res => res.data.hits[0].recipe.uri.split('recipe_')[1])
  .then(async recipeId => {
    const res = await get(`${edamam}/recipes/v2/${recipeId}?${requiredText}`);
    const data = await res.data;
    return data;
  })
  .then(res => {
    log(res);
  })
  .catch(err => console.error(err));
