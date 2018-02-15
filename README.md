# Hangman Constructor JS

This program lets you play a simple game of hangman using node.js.

---

The program uses three files: **main.js**, **letter.js**, and **word.js**.
It first creates a new **Word** constructor and sets random word from its **wordBank**.

The **Letter** constructor then takes that word, creates a **wordBlank** to keep track of the player's progress.

**Inquirer** then runs so long as tries is greater than 0. **letterGuess** will record the answer from the inquiry and update wordBlank if there is a right guess.