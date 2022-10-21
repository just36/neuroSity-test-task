const fetchApi = require('node-fetch');

fetchApi('https://jsonplaceholder.typicode.com/photos/')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => {
    console.error(err);
  });
