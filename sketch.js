const resolution = 5;
let cols;
let rows;
let grid;

function setup() {
  createCanvas(1000, 600);
  cols = Math.floor(width / resolution);
  rows = Math.floor(height / resolution);
  grid = generatePopulatedGrid(cols, rows);
}

function draw() {
  background(0);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;

      if (grid[i][j] === 1) {
        fill(255);
        stroke(0);
        rect(x, y, resolution - 1, resolution - 1);
      }
    }
  }

  let nextGenerationGrid = generateGrid(cols, rows);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      let neighbors = countNeighbors(grid, i, j);
      let currentState = grid[i][j];

      if (currentState === 0 && neighbors === 3) {
        nextGenerationGrid[i][j] = 1;
      } else if (currentState === 1 && (neighbors < 2 || neighbors > 3)) {
        nextGenerationGrid[i][j] = 0;
      } else {
        nextGenerationGrid[i][j] = currentState;
      }
      
    }
  }
  
  grid = nextGenerationGrid;

}