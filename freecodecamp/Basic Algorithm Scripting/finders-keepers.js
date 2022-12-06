/*
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

//2nd solution
/*function findElement(arr, func) {
  return arr.find(func);
}
*/
 //3rd solution
 /*
function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

code explanation:
1. Look through the array given in the 1st paramater “arr” using the .map() method
2. Use the function in the 2nd parameter as the callback function in arr.map()
3. Acquire the index of the first number that meets the condition in the function.
4. Use that index to display the first available number that meets the condition.
 */

//  4th solution (** Recursive Solution**)
/*
function findElement(arr, func) {
  if (arr.length > 0 && !func(arr[0])) {
    return findElement(arr.slice(1), func);
  } else {
    return arr[0];
  }
}
*/