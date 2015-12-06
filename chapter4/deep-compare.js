function deepEqual(val1, val2) {
  if (val1 === val2) {
    return true;
  }
  if (val1 == null || val2 == null || typeof val1 != "object" || typeof val2 != "object") {
    return false;
  }
  var propsInVal1 = 0, propsInVal2 = 0;
  for (var prop in val1) {
    propsInVal1 ++;
  }
  for (var prop in val2) {
    propsInVal2 ++;
    if (!(prop in val1) || !deepEqual(val1[prop], val2[prop])) {
      return false;
    }
  }
  return propsInVal1 == propsInVal2;
}
var obj = {first: {next: "val"}, object: 3};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {first: {next: "val1"}, object: 3}));
console.log(deepEqual(obj, {first: {next: "val"}, object: 3}));
