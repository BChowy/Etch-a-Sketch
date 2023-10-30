const container = document.querySelector('#container');
const resizeBtn = document.querySelector('#resize');

resizeBtn.addEventListener('click', getNewSize);

//Calculate dimension
let calculateDims = (divPerRow) => 960 / divPerRow;

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
        div.classList.add('change-color');
    });

});
}
