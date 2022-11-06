//.................................Store Multiple Values in one Variable using JavaScript Arrays.................................//

const myArray = ["shoes", 2];
console.log(myArray);

//..................................Nest one Array within Another Array.........................................................//
const myNewArray = [
  ["Shoes", 10],
  ["Sandals", 20],
];
console.log(myNewArray);

//..................................Access Array Data with Indexes..............................................................//
const myArr = [50, 60, 70];
const myData = myArr[0];
console.log(myData);

//.................................Modify Array Data With Indexes.............................................................//
const myArr2 = [64, 89, 100];
myArr2[0] = 13;
console.log(myArr2);

//.............................Access Multi-Dimensional Arrays With Indexes..................................................//
const myArr3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData2 = myArr3[2][1];
console.log(myData2);

//................................Manipulate Arrays With push()..............................................................//
const myUnitedArr = [["Ronaldo", 7], ["Bruno", 18], ["De Gea", 1]];
myUnitedArr.push(["Cavani", 21]);
console.log(myUnitedArr);

//................................Manipulate Arrays With pop()................................................................//
const unitedArr = [["Ronaldo, 7"], ["Bruno, 18"], ["De Gea", 1], ["Fred", 17]];
const worstDown = unitedArr.pop();
console.log(worstDown);
console.log(unitedArr);

//........................................Manipulate Arrays With shift()......................................................//

const newUnitedArr = [["Ronaldo, 7"], ["Bruno, 18"], ["De Gea", 1], ["Fred", 17]];
const theBestOut = newUnitedArr.shift();
console.log(theBestOut);
console.log(newUnitedArr);

//.........................................Manipulate Arrays With unshift()...................................................//
const nuUnitedArr = [["Ronaldo", 7], ["Bruno", 18 ], ["De Gea" , 1], ["Fred", 17]];
nuUnitedArr.shift();

nuUnitedArr.unshift([" Pogba", 6]);

console.log("the new united are : \n\t" + nuUnitedArr);
console.log(nuUnitedArr);

//................................................Shopping List.............................................................//

const unitedShoppingList = [["Messi", 10], ["Koulibally", 3], ["Barella", 20], ["Haaland", 12], ["Locatelli", 68]];
console.log(unitedShoppingList);