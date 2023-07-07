require('dotenv').config();
const { get } = require('axios');
const _ = require('lodash');

const log = console.log;


const getMealDbRecipe = () => {
  get(``, {
    headers: {
      'Accept': 'application/json',
      'Accept-Language': 'en',
    }
  })
    .then(res => {
      log(res);
    })
    .catch(err => console.error(err));
};

module.exports = { getMealDbRecipe };
