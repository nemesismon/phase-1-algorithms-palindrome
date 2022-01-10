function isPalindrome(word) {
  // Write your algorithm here
  
  // console.log(typeof word);
  
  const origWord = word.split('');
  const revWord = [];

  // console.log(origWord);

  for (i=0; i < origWord.length; i++) {
    revWord.unshift(origWord[i]);
  }

  const wordToCheck = JSON.stringify(origWord);
  const revWordToCheck = JSON.stringify(revWord);

  // console.log(wordToCheck);
  // console.log(revWordToCheck);
  // console.log(typeof wordToCheck);
  // console.log(typeof revWordToCheck);

  if (wordToCheck === revWordToCheck) {
    return true;
  }
  else if (wordToCheck !== revWordToCheck) 
    return false;
  

};

/* 
  Add your pseudocode here
  + Using the word sent to the function, I will begin by
    creating two arrays, one that will hold the initial word
    and be the basis for the comparison check and the other will
    hold the same word but in reverse
  + Compare the two arrays now with an if statement and return
    the boolean answer
*/

/*
  Add written explanation of your solution here
  + First I checked the typeof for the parameter word (it was an object).  
  Then from there I continued with seperating the characters of the word into a new array.
  As planned, I next used the for loop to iterate through the characters 
  and add them to the beginning of the array for the word in reverse using unshift.
  Once that was completed, I simply changed them to strings using stringify
  and compared the two using an if statement, returning true if they did and false
  if not.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
