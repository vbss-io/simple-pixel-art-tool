const pixelBoard = document.getElementById('pixel-board');
const colorPalette = document.getElementById('color-palette');
const button = document.getElementById('clear-board');
const paletteColors = [];
let pixelCreate = [];
const linePixels = 5;
//const pixelDimension = linePixels * linePixels;
const colorNumber = 4;
let linePixels2 = 5;
let lastLinePixel = linePixels2;

const inputValue = document.getElementById('board-size');
const buttonInput = document.getElementById('generate-board');
let firstBoard = true;

function cleanLastBoard() {

  let lastPixelsDimension = lastLinePixel * lastLinePixel;
  for (let index = 0; index < lastPixelsDimension; index += 1) {
    pixelBoard.removeChild(pixelCreate[index]);
  }
  pixelCreate = [];
}

function catchImputValue() {
  linePixels2 = inputValue.value;
  if (linePixels2 === '') {
    alert('Board inválido!');
  } else if (linePixels2 < 5) {
    linePixels2 = 5;
    cleanLastBoard();
    pixelInit(linePixels2);
    pixelEventsInit();
  } else if (linePixels2 > 50) {
    linePixels2 = 50;
    cleanLastBoard();
    pixelInit(linePixels2);
    pixelEventsInit();
  } else {
    cleanLastBoard();
    pixelInit(linePixels2);
    pixelEventsInit();
  }
}

buttonInput.addEventListener('click', catchImputValue);













// Iniciando a paleta de cores

// console.log(Math.ceil(Math.random() * (256 - 0) + 0));

function randomColor() {
  return Math.ceil(Math.random() * (256 - 0) + 0);
}

function setRgbColor() {
  let red = randomColor();
  let green = randomColor();
  let blue = randomColor();

  let rgb = `rgb(${red}, ${green}, ${blue})`;
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

pixelBoard.style.width = `${(40 * linePixels2) + 40}px`;

let pixelsDimension = linePixels2 * linePixels2;
for (let index = 0; index < pixelsDimension; index += 1) {
  pixelCreate[index] = document.createElement('div');
  pixelBoard.appendChild(pixelCreate[index]).className = 'pixel';
}

// Iniciando o pixel board
function pixelInit(pixelsNumber) {
  // Concatenado atomaticamente pelo VSCode - Problema Lint
  lastLinePixel = pixelsNumber;
  pixelBoard.style.width = `${(40 * pixelsNumber) + 40}px`;

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
