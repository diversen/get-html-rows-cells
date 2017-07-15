function getHTMLRowsCells(numRows, numCells) {
    var str = '';
    for (rowID = 0; rowID < numRows; rowID++) {
        str += `<div class="row" data-id="${rowID}">`;
        str += getCells(rowID, numCells);
        str += `</div>`;
    }
    return str;
}

function getCells(rowID, numCells) {
    var str = '';
    for (c = 0; c < numCells; c++) {
        str += `<span class="cell" data-row-id="${rowID}" data-cell-id="${c}"></span>`;
    }
    return str;
}

module.exports = getHTMLRowsCells;
