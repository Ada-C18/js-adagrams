const letterPool = {
	A: 9,
	B: 2,
	C: 2,
	D: 4,
	E: 12,
	F: 2,
	G: 3,
	H: 2,
	I: 9,
	J: 1,
	K: 1,
	L: 4,
	M: 2,
	N: 6,
	O: 8,
	P: 2,
	Q: 1,
	R: 6,
	S: 4,
	T: 6,
	U: 4,
	V: 2,
	W: 2,
	X: 1,
	Y: 2,
	Z: 1,
};

// WAVE 1
// TODO
// - later: refactor using closure -> change hand length
export const drawLetters = () => {
	// Implement this method for wave 1
	// const drawLetters = () => {

	const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let hand = [];
	let handCount = {};

	while (hand.length < 10) {
		let random_letter =
			upperLetters[Math.floor(Math.random() * upperLetters.length)];

		// if hand already has random letter, check count
		if (hand.includes(random_letter)) {
			if (handCount[random_letter] < letterPool[random_letter]) {
				hand.push(random_letter);
				handCount[random_letter] += 1;
			}
		} else {
			// if letter not in hand yet
			hand.push(random_letter);
			handCount[random_letter] = 1;
		}
	}
	return hand;
};
// console.log(drawLetters());

// WAVE 2
// export const usesAvailableLetters = (input, lettersInHand) => {
const usesAvailableLetters = (input, lettersInHand) => {
	// Implement this method for wave 2
	// const lettersInHand = drawLetters();
	// for (let letter of input) {
	// 	if (letter not in lettersInHand) {
	// 		return false;
	// 	}
	// 	return true;
	// }
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
