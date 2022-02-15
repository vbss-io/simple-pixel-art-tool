const pixelBoard = document.getElementById('pixel-board');
const colorPalette = document.getElementById('color-palette');
const button = document.getElementById('clear-board');
const paletteColors = [];
const pixelCreate = [];
const linePixels = 5;
const pixelDimension = linePixels * linePixels;
const colorNumber = 4;

// Iniciando a paleta de cores
for (let index = 0; index < colorNumber; index += 1) {
  paletteColors[index] = document.createElement('div');
  colorPalette.appendChild(paletteColors[index]).className = 'color';
}

paletteColors[0].style.backgroundColor = 'black';
paletteColors[0].classList.add('selected');
paletteColors[1].style.backgroundColor = 'blue';
paletteColors[2].style.backgroundColor = 'green';
paletteColors[3].style.backgroundColor = 'red';

// Iniciando o pixel board
// Concatenado atomaticamente pelo VSCode - Problema Lint
pixelBoard.style.width = `${(40 * linePixels) + 10}px`;

for (let index = 0; index < pixelDimension; index += 1) {
  pixelCreate[index] = document.createElement('div');
  pixelBoard.appendChild(pixelCreate[index]).className = 'pixel';
}

// Implementando a função de selecionar cor
function cleanColorSelected() {
  for (let index = 0; index < paletteColors.length; index += 1) {
    if (paletteColors[index].className.includes('selected')) {
      paletteColors[index].classList.remove('selected');
    }
  }
}

function colorSelect(color) {
  if (!color.target.className.includes('selected')) {
    cleanColorSelected();
    color.target.classList.add('selected');
  }
}

for (let index = 0; index < paletteColors.length; index += 1) {
  paletteColors[index].addEventListener('click', colorSelect);
}

// Implementando a mudança de cor dos pixels do board
function changePixelColor(pixel) {
  let currentColor = document.querySelector('.selected').style.backgroundColor;
  pixel.target.style.backgroundColor = currentColor;
}

for (let index = 0; index < pixelCreate.length; index += 1) {
  pixelCreate[index].addEventListener('click', changePixelColor);
}

// Implementando o botão

function clearBoard() {

  for (let index = 0; index < pixelCreate.length; index += 1) {
    pixelCreate[index].style.backgroundColor = 'white';
  }

}

button.addEventListener('click', clearBoard);
