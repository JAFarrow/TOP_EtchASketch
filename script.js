const container = document.getElementById('etch');
let trigger = false;
let blackFillTrue = true;
let colourFillTrue = false;
document.getElementById('rangeValue').innerHTML = "16 x 16"; 
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

document.addEventListener('mousedown', () => {
    trigger = true;
});
document.addEventListener('mouseup', () => {
    trigger = false;
});

function blackFill () {
    let allPixels = document.querySelectorAll('.pixel');
        allPixels.forEach((pixel) => {
            pixel.addEventListener('mouseover', () => {
                if (trigger == true) {
                    pixel.setAttribute('style', 'background-color: #000000;')
                }    
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
                if (trigger == true) {
                    pixel.setAttribute('style', `background-color: #${randomColour()};`)
                }
            })
        })
}

document.getElementById('rangeSlider').addEventListener('change', function (e) {
    gridSweep();
    gridInit(this.value);
    document.getElementById('rangeValue').innerHTML = `${this.value} x ${this.value}`;
    if (blackFillTrue == true && colourFillTrue == false) {
        blackFillToggle();
    } else if (blackFillTrue == false && colourFillTrue == true) {
        colourFillToggle();
    }
})

function blackFillToggle () {
    blackFillTrue = true;
    colourFillTrue = false;
    blackFill();
}

document.getElementById('blackFill').addEventListener('click', () => {
    blackFillToggle();
})

function colourFillToggle () {
    blackFillTrue = false;
    colourFillTrue = true;
    colourFill();
}

document.getElementById('colourFill').addEventListener('click', () => {
    colourFillToggle();
})
