function factorialize(num) {
  let result = num;
  if (num === 0 || num === 1) return 1;
  while (num > 1) {
    num--;

    result *= num;
  }
  return result;
}
factorialize(5);
//  OR
/*function factorialize(num) {
  if (num === 0 || num === 1)
  return 1;
  for(let i = num - 1; i >= 1; i--){
    num = num * i;
  }
   return num;
 }
 
 factorialize(5); */

//  OR

/*
function factorialize(num) {
 if (num < 0) 
 return -1;
 else if(num === 0) 
 return 1;
 else {
   return (num * factorialize(num - 1));
 }
}

factorialize(5);
*/
