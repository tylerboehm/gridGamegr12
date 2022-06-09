let shapeNumberPlaced = 0;
function setup() {
  createCanvas(400, 600);
  createGrid();
  createCube();
  createEl();
  createelf();
  createEs()
  placeShapes();
}
function draw() {
  background(220);
  for (j = 0; j < 10; j++) {
    for (i = 0; i < 10; i++) {
      g[j][i].draw();
    } //end loop
  } //end j loop
  c.draw();

  el.draw();
  el2.draw();

  elf.draw();
  elf2.draw();
  
  es.draw()
  es2.draw()

  if (el.isPressed) {
    el.locate(mouseX, mouseY);
    el2.locate(mouseX, mouseY + 30);
  } //end if
  if (es.isPressed) {
    es.locate(mouseX, mouseY);
    es2.locate(mouseX-30, mouseY + 30);
  } //end if
  if (elf.isPressed) {
    elf.locate(mouseX, mouseY);
    elf2.locate(mouseX - 30, mouseY + 30);
  } //end if
  if (c.isPressed) {
    c.locate(mouseX, mouseY);
  } //end if
} //end draw
function checkInGrid(thisShape){
  if(thisShape.x < 30){
    //the shape off the grid to the left.
    thisShape.x = 30;
  }
  if(thisShape.y < 30){
    //the shape is off the top of 
    //the grid.
    thisShape.y = 30;
  }
  if(thisShape.y > 330){
    //the shape is off the top of 
    //the grid.
    thisShape.y = 300;
  }
   if(thisShape.x > 330){
    //the shape is off the top of 
    //the grid.
    thisShape.x = 300;
  }
}
function placeShapes() {
  /*this will randomly select 3 shapes
  and place them below the grid
  */
  let numsUsed = []
  numsUsed.push(-1)
  for (i = 0; i < 3; i++) {
    let rndNum = Math.floor(random(4));
    while(numsUsed.includes(rndNum)){
      rndNum = Math.floor(random(4));
    }
    numsUsed.push(rndNum)
    /*Each if block will represent a 
    shape in the game.
    We are just resetting the x position of
    that shape.
    */
    if (rndNum == 0) {
      c.x = 30 + i * 125;
      c.y = 360;
    } else if (rndNum == 1) {
      el.x = 30 + i * 125;
      el2.x = el.x;
      el2.y = el.y + 30;
      el.y = 360;
      el2.y = 390;
    } else if (rndNum == 2) {
      elf.x = 30 + i * 125;
      elf2.x = elf.x - 30;
      elf2.y = elf.y + 30;
      elf.y = 360;
      elf2.y = 390;
    } else if (rndNum == 3) {
      es.x = 30 + i * 125;
      es2.x = es.x - 30;
      es2.y = es.y + 30;
      es.y = 360;
      es2.y = 390;
    } //end if
    rndNum = Math.floor(random(4));
  }
}
function checkForThree(){
  shapeNumberPlaced += 1;
  if(shapeNumberPlaced==3){
    shapeNumberPlaced=0;
    placeShapes();
  }
}
