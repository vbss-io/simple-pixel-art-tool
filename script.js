const pixelBoard = document.getElementById('pixel-board');
const colorPalette = document.getElementById('color-palette');
const pixelColors = [];
const pixelCreate = [];

const linePixels = 5;
const pixelDimension = linePixels * linePixels;

const colorNumber = 4;

for (let index = 0; index < colorNumber; index += 1) {
  pixelColors[index] = document.createElement('div');
  colorPalette.appendChild(pixelColors[index]).className = 'color';
}

pixelColors[0].style.backgroundColor = 'black';
pixelColors[0].classList.add('selected');
pixelColors[1].style.backgroundColor = 'blue';
pixelColors[2].style.backgroundColor = 'green';
pixelColors[3].style.backgroundColor = 'red';

// Concatenado atomaticamente pelo VSCode - Problema Lint
pixelBoard.style.width = `${(40 * linePixels) + 10}px`;

for (let index = 0; index < pixelDimension; index += 1) {
  pixelCreate[index] = document.createElement('div');
  pixelBoard.appendChild(pixelCreate[index]).className = 'pixel';
}

function cleanColorSelected() {
  for (let index = 0; index < pixelColors.length; index += 1) {
    if (pixelColors[index].className.includes('selected')) {
      pixelColors[index].classList.remove('selected');
    }
  }
}

function colorSelect(color) {
  if (!color.target.className.includes('selected')) {
    cleanColorSelected();
    color.target.classList.add('selected');
  }
}

for (let index = 0; index < pixelColors.length; index += 1) {
  pixelColors[index].addEventListener('click', colorSelect);
}

function changePixelColor(pixel) {
  let currentColor = document.querySelector('.selected').style.backgroundColor;
  pixel.target.style.backgroundColor = currentColor;
}

for (let index = 0; index < pixelCreate.length; index += 1) {
  pixelCreate[index].addEventListener('click', changePixelColor);
}
