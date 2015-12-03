// Looping a triangle
var output = "#";
for (var i = 1; i < 8; i++) {
  console.log(output);
  output = output + "#";
}

// Shorter version
for (var line = "#"; line.length < 8; line += "#") {
  console.log(line);
}
