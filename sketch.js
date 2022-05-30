function setup() {
  createCanvas(400, 400);
  createGrid();
}

function draw() {
  background(220);
  for (j = 0; j < 10; j++) {
    for (i = 0; i < 10; i++) {
      g[j][i].draw();
    } //end loop
  } //end j loop
}
