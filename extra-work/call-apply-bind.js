//call
var obj = {num:2};

var addToThis  = function(a) {
  return this.num + a;
};

console.log(addToThis.call(obj, 3));

var obj = {num:2};

var addToThis  = function(a, b, c) {
  return this.num + a * (b + c);
};

console.log(addToThis.call(obj, 3, 4, 5)); //29

// apply
var arr = [1, 2, 3];
console.log(addToThis.apply(obj, arr));

//bind
var obj2 = {num:8};
var addToThis  = function(a, b, c) {
  return this.num + a * (b + c);
};
console.log(addToThis.bind(obj2, 3, 4, 5));// function
var bound = addToThis.bind(obj2);
console.log(bound(3, 4, 5)); //35
