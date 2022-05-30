let g = [];
function createGrid() {
  //makes a 10 x 10 grid
  //this will make a button
  //at location 30,30
  g.push(new Clickable(30, 30));
  for (i = 0; i < 5; i++) {
    g[i].resize(30, 30);
    g[i].text = "";
    g[i].cornerRadius = 0;
    g[i].color = "purple";
  } //end loop
}
