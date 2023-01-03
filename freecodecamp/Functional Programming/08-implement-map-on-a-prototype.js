Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  // OR
  /*  this.forEach((element, index, firstArray) =>
    newArray.push(callback(element, index, firstArray))
  );
*/
  // Only change code above this line
  return newArray;
};
