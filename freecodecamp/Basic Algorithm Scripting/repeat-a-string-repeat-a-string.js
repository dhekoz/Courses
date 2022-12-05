/*

*/
function repeatStringNumTimes(str, num) {
  let ulangiString = "";
  while (num > 0) {
    ulangiString += str;
    num--;
  }
  return ulangiString;
}

repeatStringNumTimes("abc", 3);
