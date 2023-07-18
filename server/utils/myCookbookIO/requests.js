const { request } = require('axios');

const getMyCookbookIORecipe = async () => {
  const options = {
    method: 'POST',
    url: 'https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi',
    headers: {
      'content-type': 'text/plain',
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'mycookbook-io1.p.rapidapi.com'
    },
    data: 'https://www.jamieoliver.com/recipes/vegetables-recipes/superfood-salad/'
  };
  
  try {
    const response = await request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getMyCookbookIORecipe };
