const container = document.querySelector('.container');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

for (let i = 1; i <= getRandomInt(10, 100); i++) {
  container.innerHTML += `<div class="square" style="background-color:rgb(${getRandomInt(
    0,
    255
  )}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})"></div>`;
}
