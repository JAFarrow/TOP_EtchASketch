const container = document.getElementById('etch');
let gridSize = 16;
let trigger = false;
let blackFillTrue = true;
let colourFillTrue = false;
let eraserTrue = false;
document.getElementById('rangeValue').innerHTML = '16 x 16';
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

function blackFill() {
    let allPixels = document.querySelectorAll('.pixel');
    allPixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            if (trigger == true) {
                pixel.setAttribute('style', 'background-color: #000000;')
            }
        })
    })
}

function randomColour() {
    let colourRNG = Math.floor(Math.random() * 16777215).toString(16);
    return colourRNG;
}

function colourFill() {
    let allPixels = document.querySelectorAll('.pixel');
    allPixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            if (trigger == true) {
                pixel.setAttribute('style', `background-color: #${randomColour()};`)
            }
        })
    })
}

function eraser() {
    let allPixels = document.querySelectorAll('.pixel');
    allPixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            if (trigger == true) {
                pixel.setAttribute('style', 'background-color: #ffffff;')
            }
        })
    })
}

function pointerAction () {
    if (blackFillTrue == true && colourFillTrue == false && eraserTrue == false) {
        blackFillToggle();
    } else if (blackFillTrue == false && colourFillTrue == true && eraserTrue == false) {
        colourFillToggle();
    } else if (blackFillTrue == false && colourFillTrue == false && eraserTrue == true) {
        eraserToggle();
    }
}

document.getElementById('rangeSlider').addEventListener('change', function (e) {
    gridSweep();
    gridInit(this.value);
    gridSize = this.value;
    document.getElementById('rangeValue').innerHTML = `${this.value} x ${this.value}`;
    pointerAction();
})

function blackFillToggle() {
    blackFillTrue = true;
    colourFillTrue = false;
    eraserTrue = false;
    blackFill();
}

document.getElementById('blackFill').addEventListener('click', () => {
    blackFillToggle();
})

function colourFillToggle() {
    blackFillTrue = false;
    colourFillTrue = true;
    eraserTrue = false;
    colourFill();
}

document.getElementById('colourFill').addEventListener('click', () => {
    colourFillToggle();
})

function eraserToggle() {
    blackFillTrue = false;
    colourFillTrue = false;
    eraserTrue = true;
    eraser();
}

document.getElementById('eraser').addEventListener('click', () => {
    eraserToggle();
})

document.getElementById('reset').addEventListener('click', () => {
    gridSweep();
    gridInit(gridSize);
    pointerAction();
}) 

let allButtons = document.querySelectorAll('.button');

function clearOutline () {
    allButtons.forEach((button) => {
        button.setAttribute('style', 'border: 0.1rem solid #c2bfb8;')
    })
};

allButtons.forEach((button) => {
    button.addEventListener('click', function() {
        clearOutline();
        this.setAttribute('style', 'border: 0.4rem solid #80d4ff;')
    })
})
