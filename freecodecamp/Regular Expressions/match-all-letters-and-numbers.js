let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /[A-Za-z0-9_\w+]/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;