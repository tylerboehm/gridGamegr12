let el;
let el2;

function createEl() {
  el = new Clickable(1000, 360);
  el2 = new Clickable(1000, 390);
  el.resize(30, 60);
  el2.resize(60, 30);
  el2.strokeWeight = 0;
  el.strokeWeight = 0;
  el.color = "pink";
  el2.color = "pink";
  el.text = "";
  el2.text = "";
  el.onPress = function () {
    el.isPressed = true;
    el2.isPressed = true;
  };
  el.onRelease = function () {
    el.isPressed = false;
    el2.isPressed = false;
    el.x = Math.floor(el.x / 30) * 30;
    el.y = Math.floor(el.y / 30) * 30;
    el2.x =el.x
    el2.y = el.y + 30
    placeEl();
  };
} //end createCube

function placeEl() {
  let thisX = el.x / 30 - 1;
  let thisY = el.y / 30 - 1;
  g[thisX][thisY].color = el.color;
  el.x = 600;
  el2.x = 600
}
