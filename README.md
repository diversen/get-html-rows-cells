# get-html-rows-cells

Simple nodejs function for generating divs with cells as HTML with data-cell-id and data-row-id set. 

## Install

npm install --save get-html-rows-cells

# Code

See [index.js](index.js)

# Usage

    var getRowsCells = require('get-html-rows-cells');
    console.log(getRowsCells(1, 2); // One row and two cells
    // => <div class="row" data-id="0"><span class="cell" data-row-id="0" data-cell-id="0"></span><span class="cell" data-row-id="0" data-cell-id="1"></span></div>

See [test.js](test.js)

Usage example: 

MIT © [Dennis Iversen](https://github.com/diversen)

