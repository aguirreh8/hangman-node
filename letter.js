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
	for (let i = 0; i < this.word.length; i++) {
		if (letterUsed === this.word.charAt(i)) {
			this.wordBlank[i] = letterUsed;
		}
	}
	console.log(this.wordBlank);
}

module.exports = Letter;