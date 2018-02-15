function Letter(word) {
	this.letterBank = [];
	this.word = word;
	this.wordBlank = [];
};

Letter.prototype.setWordBlank = function() {
	for (let i = 0; i < this.word.length; i++) {
		this.wordBlank[i] = "_";
	}
};

Letter.prototype.letterGuessed = function(letterUsed) {
	this.letterBank.push(letterUsed);
	console.log(`Letters used: ${this.letterBank}`);
	for (let i = 0; i < this.word.length; i++) {
		if (letterUsed === this.word.charAt(i)) {
			this.wordBlank[i] = letterUsed;
		}
	}

	console.log(this.wordBlank);
	console.log("--------------------------");
};

Letter.prototype.wordProgress = function() {
	let wordProgress = "";
	for (let j = 0; j < this.wordBlank.length; j++) {
		wordProgress = wordProgress + this.wordBlank[j];	
	};
	return wordProgress;	
}

module.exports = Letter;