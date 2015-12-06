var arrays = [[1, 2, 3], [4, 5], [6]];
var flattened = arrays.reduce(function(a, b) {
  return a.concat(b);
}, []);
console.log(flattened);

// Given solution
var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(flat, current) {
  return flat.concat(current);
}, []));
