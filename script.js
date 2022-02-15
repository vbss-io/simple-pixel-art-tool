const pixelBoard = document.getElementById('pixel-board');
const pixelCreate = [];

console.log(pixelBoard);

const linePixels = 5;
const pixelDimension = linePixels * linePixels;

// Concatenado atomaticamente pelo VSCode - Problema Lint
pixelBoard.style.width = `${(40 * linePixels) + 10}px`;

for (let index = 0; index < pixelDimension; index += 1) {
  pixelCreate[index] = document.createElement('div');
  pixelBoard.appendChild(pixelCreate[index]).className = 'pixel';
}

const colors = document.querySelectorAll('.color');
console.log(colors[0].className);

function CleanColorSelected() {
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].className.includes('selected')) {
      colors[index].classList.remove('selected');
    }
  }
}

function colorSelect(color) {
  if (!color.target.className.includes('selected')) {
    console.log('nao tem');
    CleanColorSelected();
    color.target.classList.add('selected');
  }
}

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', colorSelect);
}
