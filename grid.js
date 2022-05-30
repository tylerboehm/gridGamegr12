let g = [];
function createGrid() {
  //makes a 10 x 10 grid
  //this will make a button
  //at location 30,30
  for (j = 0; j < 10; j++) {
    g[j] = [];
    for (i = 0; i < 10; i++) {
      g[j][i] = new Clickable(30 + j * 30, 30 + i*30);
      g[j][i].resize(30, 30);
      g[j][i].text = "";
      g[j][i].cornerRadius = 0;
      g[j][i].color = "purple";
    } //end i loop
  } //end j loop
}
