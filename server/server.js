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
    log(hits[0].recipe.label);
    log(hits[0].recipe.uri);
    log(hits[0].recipe.source);
    log(hits[0].recipe.cautions);
    log(hits[0].recipe.calories);
    log(hits[0].recipe.ingredientLines);
    

    // hits.map(hit => {
    //   log(hit.recipe);
    //   log(hit._links.self.href);
    // });
  })
  .catch(err => console.error(err));
