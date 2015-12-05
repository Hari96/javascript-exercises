/*function countBs(str) {
  var count = 0;
  for (var n = 0; n < str.length; n++) {
    if (str.charAt(n) == "B") {
      count++;
    }
  }
  return count;
}
console.log(countBs("Black Balls are Back and Blue"));
*/
function countChar(str, c) {
  var count = 0;
  for (var n = 0; n < str.length; n++) {
    if (str.charAt(n) == c) {
      count++;
    }
  }
  return count;
}
console.log(countChar("elephants are large", "e"));

function countBs(str) {
  return countChar(str, "B")
}
console.log(countBs("Billy Big Bouncer"))
