const container = document.querySelector('#container');
const resizeBtn = document.querySelector('#resize');


//Calculate dimension
let calculateDims = (divPerRow) => 960 / divPerRow;

//Create a grid of div
function createGrid(divPerRow = 32) {
    const dimensions = calculateDims(divPerRow);
    let pixels = Math.pow(divPerRow, 2);
    let i = 0;

    //create div, add class to it, determine it dimensions, then append it to the container
    while (i < pixels) {
        const div = document.createElement('div');
        div.classList.toggle('divStyle');
        div.style.height = dimensions + 'px';
        div.style.width = dimensions + 'px';
        container.appendChild(div);
        i++;
    }
    }

const allDiv = container.querySelectorAll('div');

//hover effect
allDiv.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.add('change-color');
    });

});