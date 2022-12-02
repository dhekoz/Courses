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
*/
