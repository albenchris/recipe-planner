// Server
const { get } = require('axios');
const _ = require('lodash');
// const { red, yellow, blue, cyan } = import('chalk');
const log = console.log;

const edamam = 'https://api.edamam.com/api'

get(`${edamam}/recipes/v2`)
  .then(res => {
    // log(cyan(res));
    log(res);
  })
  .catch(err => console.error(err));
