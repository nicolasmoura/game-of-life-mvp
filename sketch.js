const resolution = 10;
let cols;
let rows;
let gridA;
let gridB;

function setup() {
  createCanvas(600, 600);
  cols = Math.floor(width / resolution);
  rows = Math.floor(height / resolution);
  gridA = generatePopulatedGrid(cols, rows);
  gridB = generateGrid(cols, rows);
  frameRate(5);
}

function draw() {
  background(0);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;

      if (gridA[i][j] === 1) {
        fill(255);
        stroke(0);
        rect(x, y, resolution - 1, resolution - 1);
      }
    }
  }

  for (let i = 0; i < gridA.length; i++) {
    for (let j = 0; j < gridA.length; j++) {
      let neighbors = countNeighbors(gridA, i, j);
      let currentState = gridA[i][j];

      if (currentState === 0 && neighbors === 3) {
        gridB[i][j] = 1;
      } else if (currentState === 1 && (neighbors < 2 || neighbors > 3)) {
        gridB[i][j] = 0;
      } else {
        gridB[i][j] = currentState;
      }
      
    }
  }

  let tempGrid = gridA;
  gridA = gridB;
  gridB = tempGrid;
}