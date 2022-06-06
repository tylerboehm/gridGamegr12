function setup() {
  createCanvas(400, 600);
  createGrid();
  createCube();
  createEl();
  createelf();
  placeShapes()
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
  
  elf.draw()
  elf2.draw()
  
  
  if(el.isPressed){
    el.locate(mouseX, mouseY)
    el2.locate(mouseX, mouseY+30)
  }//end if
  if(elf.isPressed){
    elf.locate(mouseX, mouseY)
    elf2.locate(mouseX - 30, mouseY+30)
  }//end if
  if(c.isPressed){
    c.locate(mouseX, mouseY)
  }//end if
}//end draw

function placeShapes(){
  /*this will randomly select 3 shapes
  and place them below the grid
  */
  for(i=0;i<3;i++){
    let rndNum = Math.floor(random(3));
    /*Each if block will represent a 
    shape in the game.
    We are just resetting the x position of
    that shape.
    */
    if(rndNum ==0){
      c.x = 30 + i *125;
    }else if(rndNum == 1){
      el.x = 30 + i* 125;
      el2.x = el.x
      el2.y = el.y + 30
    }else if(rndNum == 2){
      elf.x = 30 + i* 125;
      elf2.x = elf.x - 30
      elf2.y = elf.y + 30
    }//end if
    rndNum = Math.floor(random(3));
  }
}
