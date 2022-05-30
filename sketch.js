function setup() {
  createCanvas(400, 400);
  createGrid();
}

function draw() {
  background(220);
  for(i =0; i<5; i++){
    g[i].draw();
  }//end loop
  
}
