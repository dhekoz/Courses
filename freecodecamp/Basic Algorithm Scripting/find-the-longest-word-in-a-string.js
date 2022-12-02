function findLongestWordLength(str) {
  let longest = 0;
  let current = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      if (current > longest) {
        longest = current;
      }
      current = 0;
    } else {
      current++;
    }
    if (current > longest) {
      longest = current;
    }
  }
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//OR
/*
Take the string and convert it into an array of words. Declare a variable to keep track of the maximum length and loop from 0 to the length of the array of words.

Then check for the longest word by comparing the current word to the previous one and storing the new longest word. At the end of the loop just return the number value of the variable maxLength.

function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}

OR

function findLongestWordLength(s) {
  return s
    .split(' ')
    .reduce((longest, word) => Math.max(longest, word.length), 0);
}

OR

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}


OR

function findLongestWordLength(str) {
  // split the string into individual words
  const words = str.split(" ");

  // words only has 1 element left that is the longest element
  if (words.length == 1) {
    return words[0].length;
  }

  // if words has multiple elements, remove the first element
  // and recursively call the function
  return Math.max(
    words[0].length,
    findLongestWordLength(words.slice(1).join(" "))
  );
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
*/
