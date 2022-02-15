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
