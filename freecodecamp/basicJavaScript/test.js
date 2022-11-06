// client = new Object();
// client.connect = "true";

// function foo() {
//   client.newConnect = client.connect;

//   delete client.connect;
// }

// client.hasOwnProperty("connect");

// console.log("true");

// return true;

// foo();

// client.hasOwnProperty("connect");
// console.log("false");
// return false;

// const ourDog = {
//     name: "Rocky",
//     age: 2,
//     "dog years": 14,
//     toJSON: function() {
//         return {
//             food: "dog snacks"
//         };
//     }
// }

// console.log(JSON.stringify(ourDog));

// const ourJSON = '{"name": "Roxy", "age": 2}'
// const dog = JSON.parse(ourJSON);
// console.log(dog.name);

// let person = {
//     name: "Albert Einstein",
//     profession: "Theoretical physicist",
//     languages: ["Italian", "English"],
//     equation: "c^2 = a^2 + b^2",
//     quote: "Life is like riding a bicycle. To keep your balance, you must keep moving."
// };

// person.languages.push("German");
// person.equation = "e = mc^2";
// delete person.quote;
// person.nobelRecipient = true;

// console.log(person);

let myStr = "This is my first sentence ";
myStr += "and this is my second sentence.";

console.log(myStr);

myName = "Petrus Dominikus Rudolf Soge, ";
myInt = "Hi, my name is " + myName + "and I am well.";
console.log(myInt);

someAdjective = "very interesting.";
mySentence = "Learn to code is ";
mySentence += someAdjective;
console.log(mySentence);

let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastName.length);

let firstLetterOfLastName = "";
const namaFam = "Soge";

firstLetterOfLastName = namaFam[0];
console.log(firstLetterOfLastName);

let myGreet = "Jello, World";
myGreet = "Hello, World";
console.log(myGreet);

//................................ Use Bracket Notation to Find the Nth Character in a String...................................//
const namaBelakang = "Soge";
let hurufKetigaNamaBelakang = namaBelakang[2];
console.log(hurufKetigaNamaBelakang);

//.................................Use Bracket Notation to Find the Last Character in a String..................................//
const theLastName = "Soge";
const theLastLetterOfLastName = theLastName[theLastName.length - 1];
console.log(theLastLetterOfLastName);

//.................................Use Bracket Notation to Find the Nth-to-Last Character in a String...........................//
const namaTerakhir = "Ratri";
const hurufKeduaNamaTerakhir = namaTerakhir[namaTerakhir.length - 3];
console.log(hurufKeduaNamaTerakhir);

//..................................Word Blanks..................................................................................//

const myNoun = "car";
const myAdjective = "green";
const myVerb = "crash";
const myAdverb = "uncontrollably";
const wordBlanks =
  "The " +
  myNoun +
  ", which has the colour of " +
  myAdjective +
  ", jump and " +
  myVerb +
  " in my backyard " +
  myAdverb +
  ".";
console.log(wordBlanks);

