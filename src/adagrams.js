// WAVE 1
// TODO 
// - debug letter count, pass last test
// - later: refactor using closure -> change hand length
export const drawLetters = () => {
	// const drawLetters = () => {
	// Implement this method for wave 1
	// returns array with 10 letter strings
	const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const hand = [];
	const handLength = 10;

	// while (hand.length < 10) {
	for (let i = 0; i < handLength; i++) {
		hand.push(upperLetters.charAt(Math.floor(Math.random() * handLength)));
	}

	return hand;
};

// console.log(drawLetters());

// WAVE 2
// export const usesAvailableLetters = (input, lettersInHand) => {
const usesAvailableLetters = (input, lettersInHand) => {
	// Implement this method for wave 2
	// const lettersInHand = drawLetters();
	for (let letter of input) {
		if (letter not in lettersInHand) {
			return false;
		} 
		return true;
	}
	// Returns true if every letter in the input word is available (in the right quantities) in the lettersInHand
	// Returns false if not; if there is a letter in input that is not present in the lettersInHand or has too much of compared to the lettersInHand
};

// WAVE 3
// export const scoreWord = (word) => {
const scoreWord = (word) => {
	// Implement this method for wave 3
};

// WAVE 4
// export const highestScoreFrom = (words) => {
const highestScoreFrom = (words) => {
	// Implement this method for wave 4
};
