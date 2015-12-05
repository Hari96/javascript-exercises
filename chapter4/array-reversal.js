function reverseArray(array) {
var newArray = [];
  for (item in array) {
    newArray.unshift(array[item]);
  }
  return newArray;
}
console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(array) {
  var temp = 0;
  for (n = 0; n <= Math.floor((array.length)/2); n++) {
    temp =  array[n];
    array[n] = array[array.length - 1 - n];
    array[array.length - 1 - n] = temp;
  }
  return array
}
tryArray = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(tryArray));
