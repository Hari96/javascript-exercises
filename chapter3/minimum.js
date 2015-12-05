// finding the minimum value
function min(first, sec) {
  if (first < sec) {
    return first;
  }
  else if (sec < first) {
    return sec;
  }
  else {
    return "Both same";
  }
}
console.log(min(0, 10));
console.log(min(0, -10));

// Shorter but doe not include possibility of equal numbers
function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
}
