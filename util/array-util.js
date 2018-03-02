let matrixCounter = 0;

function generateGrid(cols, rows) {
    let array = new Array(cols);
    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(rows);
    }
    matrixCounter++;
    return array;
}

function generatePopulatedGrid(cols, rows) {
    let array = generateGrid(cols, rows);
    array = fill2DArrayWithOneOrZero(array);
    return array;
}

function fill2DArrayWithOneOrZero(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            array[i][j] = Math.round(Math.random());
        }
    }

    return array;
}

function countNeighbors(array, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            if (!isEdge(array, x, y, i, j)) {
                sum += array[x + i][y + j];
            }
        }
    }

    sum -= gridA[x][y];
    return sum;
}

function isEdge(array, x, y, i, j) {
    if (x + i < 0 || x + i >= array.length) {
        return true;
    }

    if (y + j < 0 || y + j >= array[0].length) {
        return true;
    }

    return false;
}