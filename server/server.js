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
  .then(res => {
    // log(res.data);
    const hits = res.data.hits;    
    // const recipe = hits[0].recipe;
    // log(recipe.label + ':', recipe);
    
    hits.map(hit => {
      const recipe = hit.recipe;
      log(recipe.label);
    });
  })
  .catch(err => console.error(err));
