// making a chessboard of spaces and '#'s
var output = "";
for (var i = 1; i <=72; i++) {
  if (i%9 == 0) {
    output += "\n";
    console.log(output);
    output = "";
    continue;
  }
  if (i%2 != 0) {
    output += " ";
  }
  else {output += "#";}
}

// a more generalized solution
var size = 8;// size can be changed, making different grids

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
