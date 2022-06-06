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
    c.x = Math.floor(c.x / 30)*30;
    c.y = Math.floor(c.y / 30)*30;
    placeCube();
  }
}//end createCube

function placeCube(){
  let thisX = c.x / 30 - 1;
  let thisY = c.y / 30 - 1;
  g[thisX][thisY].color = c.color;
  c.x = 600
  
}
