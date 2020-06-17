"use strict";
/* DO NOT MODIFY EXCEPT WHERE ALLOWED */
module.exports = compare; // DO NOT MODIFY - USED FOR TESTING

function compare(word, guess) {  // DO NOT MODIFY


/* YOU MAY MODIFY THE LINES BELOW */


  var obj = {};

  const wordL = word.toLowerCase();

  const guessL = guess.toLowerCase();

  for(let i = 0; i < wordL.length; i++){
    var char = wordL.charAt(i);
    if(obj.hasOwnProperty(wordL.charAt(i))){
        obj[char]++;
    }
    else{
      obj[char] = 1;
    }
  }

  for(let i = 0; i < guessL.length; i++){
    let char = guessL.charAt(i);
    if(obj.hasOwnProperty(char)){
      if(obj[char] > 0){
        obj[char] --;
      }
    }
  }

  let sum = 0;

  for(let value of Object.values(obj)){
    sum += value;
  }

  let res = word.length - sum;

  // console.log(Object.entries(obj));

  return res;

}
