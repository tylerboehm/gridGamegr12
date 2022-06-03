function setup() {
  createCanvas(400, 600);
  createGrid();
  createCube();
  createEl()
}

function draw() {
  background(220);
  for (j = 0; j < 10; j++) {
    for (i = 0; i < 10; i++) {
      g[j][i].draw();
    } //end loop
  } //end j loop
  c.draw()
  el.draw()
  el2.draw()
  if(el.isPressed){
    el.locate(mouseX, mouseY)
    el2.locate(mouseX, mouseY+30)
  }//end if
  if(c.isPressed){
    c.locate(mouseX, mouseY)
  }//end if
}//end draw
