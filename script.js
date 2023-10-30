const container = document.querySelector('#container');
const resizeBtn = document.querySelector('#resize');


//Calculate dimension
let calculateDims = (divPerRow) => 960 / divPerRow;

    let i = 0;
    while (i < Math.pow(numOfDiv, 2)) {
        const div = document.createElement('div');
        div.classList.toggle('divStyle');
        div.style.height = dimensions + 'px';
        div.style.width = dimensions + 'px';
        container.appendChild(div);
        i++;
    }

const allDiv = container.querySelectorAll('div');

//hover effect
allDiv.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.add('change-color');
    });

});