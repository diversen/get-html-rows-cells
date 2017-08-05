var test = require('./index.js');

// One row with two cells
console.log(test(1, 2)); // => <div class="row" data-id="0"><span class="cell" data-row-id="0" data-cell-id="0"></span><span class="cell" data-row-id="0" data-cell-id="1"></span></div>

// Use tr and td instead of div and spans
console.log(test(1,2,'tr', 'td')); // => <tr class="row" data-id="0"><td class="cell" data-row-id="0" data-cell-id="0"></td><td class="cell" data-row-id="0" data-cell-id="1"></td></tr>
