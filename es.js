let es;
let es2;

function createEs() {
  es = new Clickable(1000, 360);
  es2 = new Clickable(970, 390);
  es.resize(60, 30);
  es2.resize(60, 30);
  es2.strokeWeight = 0;
  es.cornerRadius = 0;
  es2.cornerRadius = 0;
  es.strokeWeight = 0;
  es.color = "red";
  es2.color = "red";
  es.text = "";
  es2.text = "";
  es.onPress = function () {
    es.isPressed = true;
    es2.isPressed = true;
  };
  es.onRelease = function () {
    es.isPressed = false;
    es2.isPressed = false;
    es.x = Math.floor(es.x / 30) * 30;
    es.y = Math.floor(es.y / 30) * 30;
    es2.x =es.x-30
    es2.y = es.y + 30
    placeEs();
    checkForThree();
  };
} //end createCube

function placeEs() {
  let thisX = es.x / 30 - 1;
  let thisY = es.y / 30 - 1;
  g[thisX][thisY].color = es.color;
  es.x = 600;
  es2.x = 600
}
