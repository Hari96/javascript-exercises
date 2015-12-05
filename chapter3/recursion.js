// Using recursion to check for evenness
function isEven(n) {
  if(n == 0) {
    return true;
  }
  else if(n == 1) {
    return false;
  }
  else {
    return isEven(n-2);
  }
}
console.log(isEven(50));

// To cover negative values
function isEven(n) {
  if(n == 0) {
    return true;
  }
  else if(n == 1) {
    return false;
  }
  else if(n < 0) {
    return isEven(-n);
  }
  else {
    return isEven(n-2);
  }
}
