const Word = require("./word.js");
const Letter = require("./letter.js");
const inquirer = require("inquirer");

let tries = 9;

const myWord = new Word();
myWord.selectWordAtRandom();

const letters = new Letter(myWord.word);
letters.setWordBlank();

console.log(letters.wordBlank);

const hangMan = () => {
	if (tries > 0) {
		inquirer.prompt([
			{
				name:"playerGuess",
				message:"Type a letter",
				type:"input"
			}
		]).then(function(response) {
			letters.letterGuessed(response.playerGuess);
			const wordProgress = letters.wordProgress();
			if (myWord.word === wordProgress) {
				console.log("You Win");
				return;
			} else {
				tries--;
				console.log(`Tries left: ${tries}.`);
				hangMan();
			}
		})
	} else {
		console.log(`You loose! The word was ${myWord.word}`);
	};
};

hangMan();
