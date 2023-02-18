let grid1D = 2;
let grid2D = grid1D * grid1D;

for (i = 0; i < grid2D; i++) {
    pixelDiv = document.createElement('div')
    document.querySelector('.etch').appendChild(pixelDiv);
    pixelDiv.classList = 'pixel';
    document.querySelector('.etch').setAttribute('style', `grid-template-columns: repeat(${grid1D}, 1fr); grid-template-rows: repeat(${grid1D}, 1fr);`)
}

const allPixels = document.querySelectorAll('.pixel');
allPixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => {
        pixel.classList.add('pixelFill');
    })
})


