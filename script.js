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

function cleanColorSelected() {
  paletteColors.forEach((color) => {
    if (color.className.includes('selected')) {
      color.classList.remove('selected');
    }
  });
}

function colorSelect(color) {
  if (!color.target.className.includes('selected')) {
    cleanColorSelected();
    color.target.classList.add('selected');
  }
}

paletteColors.forEach((color) => {
  color.addEventListener('click', colorSelect);
});

// Implementando a mudança de cor dos pixels do board
function changePixelColor(value) {
  const pixel = value;
  const currentColor = document.querySelector('.selected').style.backgroundColor;
  pixel.target.style.backgroundColor = currentColor;
}

pixelCreate.forEach((pixel) => {
  pixel.addEventListener('click', changePixelColor);
});

function pixelEventsInit() {
  pixelCreate.forEach((pixel) => {
    pixel.addEventListener('click', changePixelColor);
  });
}

// Implementando o botão
function clearBoard() {
  pixelCreate.forEach((pixel) => {
    const whitePixel = pixel;
    whitePixel.style.backgroundColor = 'white';
  });
}

button.addEventListener('click', clearBoard);

function inputBoardSize(lineNumber) {
  cleanLastBoard();
  pixelInit(lineNumber);
  pixelEventsInit();
}

function catchInputValue() {
  linePixels = inputValue.value;
  if (linePixels.length === 0) {
    alert('Board inválido!');
  } else if (linePixels < 5) {
    alert('Board inválido! Mínimo 5x5');
  } else if (linePixels > 20) {
    alert('Board inválido! Limite de 20x20');
  } else {
    inputBoardSize(linePixels);
  }
}

buttonInput.addEventListener('click', catchInputValue);
