const Word = require("./word.js");
const Letter = require("./letter.js");

const myWord = new Word();

myWord.selectWordAtRandom();

const letters = new Letter(myWord.word);
letters.setWordBlank();

console.log(myWord.word);
console.log(letters.wordBlank);
letters.letterGuessed("p");
console.log(letters.wordBlank);

// for (let i = 0; i < myWord.wordBlank.length; i++) {
// 	wordBlankDispaly = wordBlankDispaly + myWord.wordBlank[i] + " ";
// };

// const letters = new Letter(myWord.word, myWord.wordBlank);

// letters.letterGuessed("y");