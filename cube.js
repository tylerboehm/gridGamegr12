let elf;
let elf2;

function createelf() {
  elf = new Clickable(1000, 360);
  elf2 = new Clickable(970, 390);
  elf.resize(30, 60);
  elf2.resize(60, 30);
  elf2.strokeWeight = 0;
  elf.strokeWeight = 0;
  elf.color = "blue";
  elf2.color = "blue";
  elf.text = "";
  elf2.text = "";
  elf.onPress = function () {
    elf.isPressed = true;
    elf2.isPressed = true;
  };
  elf.onRelease = function () {
    elf.isPressed = false;
    elf2.isPressed = false;
    elf.x = Math.floor(elf.x / 30) * 30;
    elf.y = Math.floor(elf.y / 30) * 30;
    elf2.x =elf.x -30
    elf2.y = elf.y + 30
    placeelf();
  };
} //end createCube

function placeelf() {
  let thisX = elf.x / 30 - 1;
  let thisY = elf.y / 30 - 1;
  g[thisX][thisY].color = elf.color;
  elf.x = 600;
  elf2.x = 600
}
