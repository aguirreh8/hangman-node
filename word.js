function Word() {
	this.word = "";
	this.wordBank = ["apple", "orange", "pear", "grape", "pinnaple", "mango", "tangerine", "kiwi", "melon", "strawberry", "grapefruit", "banana", "cherry", "peach"];
}

Word.prototype.selectWordAtRandom = function() {
	this.word = this.wordBank[Math.floor(Math.random() * this.wordBank.length)]
};

module.exports = Word;