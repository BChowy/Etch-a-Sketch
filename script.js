const container = document.querySelector('#container');
const resizeBtn = document.querySelector('#resize');

let numOfDiv = 64;
const dimensions = 960 / numOfDiv;
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