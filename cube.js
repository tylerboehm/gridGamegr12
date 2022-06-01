let c;

function createCube(){
  c = new Clickable(30,360);
  c.resize(60,60);
  c.color = "green";
  c.text = "";
  c.onPress = function(){
    c.isPressed = true;    
  }
  c.onRelease = function(){
    c.isPressed = false;
  }
}//end createCube
