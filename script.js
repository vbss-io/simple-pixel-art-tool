window.onload = function() {

}



const pixelBoard = document.getElementById('pixel-board');
const pixelCreate = [];

console.log(pixelBoard);

let linePixels = 5;
let pixelDimension = linePixels * linePixels;

pixelBoard.style.width = (40 * linePixels) + 10 + 'px';

for (let index = 0; index < pixelDimension; index += 1) {
 pixelCreate[index] = document.createElement('div')
 pixelBoard.appendChild(pixelCreate[index]).className = 'pixel';
}