function getPhotos(data) {
  console.log(data);
}

fetch('https://jsonplaceholder.typicode.com/photos/')
  .then((response) => response.json())
  .then((data) => getPhotos(data))
  .catch((err) => {
    console.error(err);
  });
