function getHTMLRowsCells(numRows, numCells, div, span) {
    
    var str = '';
    
    if (!div) div = 'span';
    if (!span) span ='span';
    
    
    for (let rowID = 0; rowID < numRows; rowID++) {
        str += `<${div} class="row" data-id="${rowID}">`;
        str += getCells(rowID, numCells, span);
        str += `</${div}>`;
    }
    return str;
}

function getCells(rowID, numCells, span) {
    var str = '';
    for (let c = 0; c < numCells; c++) {
        str += `<${span} class="cell" data-row-id="${rowID}" data-cell-id="${c}"></${span}>`;
    }
    return str;
}




module.exports = getHTMLRowsCells;
