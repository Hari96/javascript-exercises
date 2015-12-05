function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)   {
   list = {value: array[i], rest: list};
  }
  return list;
}
console.log(arrayToList([10, 20]));

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}
console.log(listToArray(arrayToList([10, 20, 30, 40])));

function prepend(value, list) {
  return {value: value, rest: list};
}
console.log(prepend(5, arrayToList([10, 15, 20, 25, 30, 35])));

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}
console.log(nth(arrayToList([10, 15, 20, 25, 30, 35]), 3));
