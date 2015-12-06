function every(array, func) {
  for (var i = 0; i < array.length; i++) {
    if (!func(array[i])) {
      return false;
    }
  }
  return true;
}

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
function isObject(obj) {
  if (typeof obj == "object") {
    return true;
  }
  return false;
}
console.log(every([{val:3}, {val:4, res:5},{val:12}], isObject));

function some(array, func) {
  for (var i = 0; i < array.length; i++) {
    if (func(array[i])) {
      return true;
    }
  }
  return false;
}
console.log(some([4, NaN, 5], isNaN));
console.log(some([3, 23, 6], isObject));
console.log(some([13, {rel:34, des:9}, 80], isObject));
