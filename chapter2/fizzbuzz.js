// fizz buzz - 'fizz' if divisible by 3, 'buzz' if divisible by 5, 'fizzbuzz' if divisible by 3 and 5
for (var i = 1; i <=100; i++) {
  if (i%3 == 0) {
    if (i%5 == 0) {
      console.log("fizzbuzz");
    }
    else {console.log("fizz");}
  }
  else if (i%5 == 0) {
    console.log("buzz");
  }
  else {
    console.log(i);
  }
}

// Shorter and better solution
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}
