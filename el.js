let el;;
let el2;

function createEl(){
  el = new Clickable(100,360);
  el.resize(30,60);
  el.color = "pink";
  el.text = "";
  el.onPress = function(){
    el.isPressed = true;    
  }
  el.onRelease = function(){
    el.isPressed = false;
    el.x = Math.floor(el.x / 30)*30;
    el.y = Math.floor(el.y / 30)*30;
    placeEl();
  }
}//end createCube

function placeEl(){
  let thisX = el.x / 30 - 1;
  let thisY = el.y / 30 - 1;
  g[thisX][thisY].color = el.color;
  el.x = 600
  
}
