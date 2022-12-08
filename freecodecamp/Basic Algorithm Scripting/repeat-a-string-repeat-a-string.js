/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.


*/
function repeatStringNumTimes(str, num) {
  let ulangiString = "";
  while (num > 0) {
    ulangiString += str;
    num--;
  }
  return ulangiString;
}

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

//OR
/*
function repeatStringNumTimes(string, times) {
  if (times > 0)
    return string.repeat(times);
  else
    return "";
}
repeatStringNumTimes("abc", 3);
*/
