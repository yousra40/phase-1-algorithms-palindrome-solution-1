function reverseString(word) {
  // Changing the letters of the word to lowerCase
  let lowerCaseWord = word.toLowerCase();

  // Splitting the word into a list so we can reverse
  let splittedWord = lowerCaseWord.split("");

  // Reversing the list to test condition on it
  let reversedWord = splittedWord.reverse();

  // Joing the list as a single string
  let fullyReversedWordJoined = reversedWord.join("");

  return fullyReversedWordJoined;
}

function isPalindrome(word) {
  // Write your algorithm here

  // Defining a variable for reversed
  let reversedWord = reverseString(word);

  // Comparing actual word with reversed word
  return reversedWord === word.toLowerCase();
}

/* 
  Add your pseudocode here

The isPalindrome function checks if a given word is a palindrome (reads the same backward as forward). Here's a concise outline of its logic:

Convert the input word to lowercase to ignore case differences.
Split the lowercase word into an array of its characters.
Reverse the array of characters.
Join the reversed array back into a string.
Compare the joined, reversed string to the original lowercase word:
If they are the same, return true indicating the word is a palindrome.
Otherwise, return false indicating the word is not a palindrome.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("HAAA"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("HMMM"));
}

module.exports = isPalindrome;
