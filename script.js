const container = document.querySelector('#container');
const resizeBtn = document.querySelector('#resize');

const blackColorBtn = document.querySelector('#black-color');
const randomColorBtn = document.querySelector('#random-color');
const clearCanvas = document.querySelector('#clear');

//Calculate dimension
let calculateDims = (divPerRow) => 480 / divPerRow;

createGrid();

//Get new size from user
function getNewSize() {
    let input = prompt("Enter number of pixels that doesn't exceed 100");
    while (input > 100) input = prompt("Enter a number less or equal 100");
    const divPerRow = Number(input);
    createGrid(divPerRow);
}

//Create a grid of div
function createGrid(divPerRow = 32) {
    removeChildren();
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
    hoverEffect();
}

//div color changes when hovering
function hoverEffect() {
    const allDiv = container.querySelectorAll('div');
    allDiv.forEach((div) => {
        div.addEventListener('mouseover', () => {
            // div.classList.add('change-color');
            div.style.backgroundColor = getRandomColor();
        });

    });
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

//Remove container's children
function removeChildren() {
    const allDiv = container.querySelectorAll('div');
    for (const div of allDiv) {
        container.removeChild(div);
    }

}