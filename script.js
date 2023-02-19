const container = document.getElementById('etch');
let blackFillTrue = 1;
let colourFillTrue = 0; 
window.onload = gridInit(16);
window.onload = blackFill();

function gridInit(grid1D) {
    document.getElementById('etch').setAttribute('style', `grid-template-columns: repeat(${grid1D}, 1fr); grid-template-rows: repeat(${grid1D}, 1fr);`);
    for (i = 0; i < (grid1D * grid1D); i++) {
        pixelDiv = document.createElement('div');
        pixelDiv.classList = 'pixel';
        container.appendChild(pixelDiv);
    }
}

function gridSweep() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function blackFill () {
    let allPixels = document.querySelectorAll('.pixel');
    allPixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            pixel.setAttribute('style', 'background-color: #000000;')
        })
    })
}

function randomColour () {
    let colourRNG = Math.floor(Math.random()*16777215).toString(16);
    return colourRNG;
}

function colourFill () {
    let allPixels = document.querySelectorAll('.pixel');
    allPixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            pixel.setAttribute('style', `background-color: #${randomColour()};`)
        })
    })
}

document.getElementById('rangeSlider').addEventListener('change', function (e) {
    gridSweep();
    gridInit(this.value);
    if (blackFillTrue == 1 && colourFillTrue == 0) {
        blackFill();
    } else if (blackFillTrue == 0 && colourFillTrue == 1) {
        colourFill();
    }
})

document.getElementById('blackFill').addEventListener('click', () => {
    blackFillTrue = 1;
    colourFillTrue = 0;
    blackFill();
})

document.getElementById('colourFill').addEventListener('click', () => {
    blackFillTrue = 0;
    colourFillTrue = 1;
    colourFill();
})
