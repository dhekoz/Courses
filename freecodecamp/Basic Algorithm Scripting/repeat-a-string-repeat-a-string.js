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

//OR
/*
function repeatStringNumTimes(string, times) {
  if(times <= 0) 
    return "";
  if(times === 1) 
    return string;
  else 
    return string + repeatStringNumTimes(string, times - 1);
}
repeatStringNumTimes("abc", 3);
*/
