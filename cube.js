let c;

function createCube(){
  c = new Clickable(1000,360);
  c.resize(60,60);
  c.color = "green";
  c.text = "";
  c.onPress = function(){
    c.isPressed = true;    
  }
  c.onRelease = function(){
    c.isPressed = false;
    checkCube();
    c.x = Math.floor(c.x / 30)*30;
    c.y = Math.floor(c.y / 30)*30;
    placeCube();
    checkForThree();
  }
}//end createCube
function checkCube(){
  if(c.x < 30){
    //the shape off the grid to the left.
    c.x = 30;
  }
  if(c.y < 30){
    //the shape is off the top of 
    //the grid.
    c.y = 30;
  }
  if(c.y > 330){
    //the shape is off the top of 
    //the grid.
    c.y = 270;
  }
   if(c.x > 330){
    //the shape is off the top of 
    //the grid.
    c.x = 270;
  }
}
function placeCube(){
  let thisX = c.x / 30 - 1;
  let thisY = c.y / 30 - 1;
  g[thisX][thisY].color = c.color;
  c.x = 600
  
}
