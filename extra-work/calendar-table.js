function calendar(y, m) {
  var d = new Date(y, m, 1);
  var day = d.getDay();
  var monthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var numDays = monthArr[m];
  var num = 1;
  var weekArr = ["S", "M", "T", "W", "T", "F", "S"];
  var output = "<div id = 'cal'>";
  output += "<table border = '1'><tr>";
  for (var d = 0; d <= 6; d++) {
  output += "<td>" + weekArr[d] + "</td>";
  }
  output += "</tr>";
  for (var i = 1; i <= 36; i += 7) {
    if (num > numDays) {
      break;
    }
    output += "<tr>";
    for (var j = i; j <= i + 6; j++) {
      if (j <= (numDays + day) && j >= (day + 1)) {
      output += "<td>" + num + "</td>";
      num ++;
      }
      else {
        output += "<td> </td>";
      }
    }
    output += "</tr>";
  }
  output += "</table> </div>";
  document.write(output);
}
