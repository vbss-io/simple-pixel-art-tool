const pixelBoard = document.getElementById('pixel-board');
const colorPalette = document.getElementById('color-palette');
const button = document.getElementById('clear-board');
const paletteColors = [];
let pixelCreate = [];
const colorNumber = 4;
let linePixels = 5;
let lastLinePixel = linePixels;

const inputValue = document.getElementById('board-size');
const buttonInput = document.getElementById('generate-board');

function cleanLastBoard() {
  const lastPixelsDimension = lastLinePixel * lastLinePixel;
  for (let index = 0; index < lastPixelsDimension; index += 1) {
    pixelBoard.removeChild(pixelCreate[index]);
  }
  pixelCreate = [];
}

// Iniciando a paleta de cores
function randomColor() {
  return Math.ceil(Math.random() * (256 - 0) + 0);
}

function setRgbColor() {
  const red = randomColor();
  const green = randomColor();
  const blue = randomColor();

  const rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
}

for (let index = 0; index < colorNumber; index += 1) {
  paletteColors[index] = document.createElement('div');
  colorPalette.appendChild(paletteColors[index]).className = 'color';
}

paletteColors[0].style.backgroundColor = 'black';
paletteColors[0].classList.add('selected');
paletteColors[1].style.backgroundColor = setRgbColor();
paletteColors[2].style.backgroundColor = setRgbColor();
paletteColors[3].style.backgroundColor = setRgbColor();

pixelBoard.style.width = `${40 * linePixels + 40}px`;

let pixelsDimension = linePixels * linePixels;
for (let index = 0; index < pixelsDimension; index += 1) {
  pixelCreate[index] = document.createElement('div');
  pixelBoard.appendChild(pixelCreate[index]).className = 'pixel';
}

// Iniciando o pixel board
function pixelInit(pixelsNumber) {
  // Concatenado automaticamente pelo VSCode - Problema Lint
  lastLinePixel = pixelsNumber;
  pixelBoard.style.width = `${40 * pixelsNumber + 40}px`;

  pixelsDimension = pixelsNumber * pixelsNumber;
  for (let index = 0; index < pixelsDimension; index += 1) {
    pixelCreate[index] = document.createElement('div');
    pixelBoard.appendChild(pixelCreate[index]).className = 'pixel';
  }
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
function changePixelColor(value) {
  const pixel = value;
  const currentColor = document.querySelector('.selected').style.backgroundColor;
  pixel.target.style.backgroundColor = currentColor;
}

for (let index = 0; index < pixelCreate.length; index += 1) {
  pixelCreate[index].addEventListener('click', changePixelColor);
}

function pixelEventsInit() {
  for (let index = 0; index < pixelCreate.length; index += 1) {
    pixelCreate[index].addEventListener('click', changePixelColor);
  }
}

// Implementando o botão
function clearBoard() {
  for (let index = 0; index < pixelCreate.length; index += 1) {
    pixelCreate[index].style.backgroundColor = 'white';
  }
}

button.addEventListener('click', clearBoard);

function catchInputValue() {
  linePixels = inputValue.value;
  if (linePixels === '') {
    alert('Board inválido!');
  } else if (linePixels < 5) {
    linePixels = 5;
    cleanLastBoard();
    pixelInit(linePixels);
    pixelEventsInit();
  } else if (linePixels > 50) {
    linePixels = 50;
    cleanLastBoard();
    pixelInit(linePixels);
    pixelEventsInit();
  } else {
    cleanLastBoard();
    pixelInit(linePixels);
    pixelEventsInit();
  }
}

buttonInput.addEventListener('click', catchInputValue);
