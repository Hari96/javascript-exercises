function range(start, end) {
  var numArr = [], c = 0, step = 1;
  if (arguments.length == 3) {
    step = arguments[2];
  }
  if (start > end) {
    step = -1
  }
  if (step < 0) {
    for (n = start; n >= end; n+= step) {
      numArr[c] = n; //could use numArray.push(n)
      c++;
    }
  }
  else {
    for (n = start; n <= end; n+= step) {
      numArr[c] = n; //could use numArray.push(n)
      c++;
    }
  }
  return numArr;
}
console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(range(5, 2));

function sum(nArray) {
  var tot = 0;
  for (num in nArray) {
    tot += nArray[num];
  }
  return tot;
}
console.log(sum(range(1, 10)));
