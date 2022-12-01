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

// a set in JS is diff
// .has(arg) method checks if a value is in a Set objec
// const SCORE_TABLE = {
//   1: {'A', 'E', "I", "O", "U", "L", "N", "R", "S", "T"},
//   2: {"D", "G"},
//   3: {"B", "C", "M", "P"},
//   4: {"F", "H", "V", "W", "Y"},
//   5: {"K"},
//   8: {"J", "X"},
//   10: {"Q", "Z"}
// };

// Implement this method for wave 1
// WAVE 1
// TODO
// - debug letter count, pass last test
// - later: refactor using closure -> change hand length
export const drawLetters = () => {
	// const drawLetters = () => {
	// returns array with 10 letter strings
	// const handLength = 10;
	// for (let i = 0; i < handLength; i++) {
	// 	hand.push(upperLetters.charAt(Math.floor(Math.random() * handLength)));
	// }

	const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let hand = [];
	// generate 1 letter at a time
	let handCount = {};
	// for (let letter of hand) {
	// 	handCount[letter] = handCount[letter] ? handCount[letter] + 1 : 1;
	// }

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
		// if (hand.includes(random)) {
		// 	if (letterCount < letterPool[random_letter]) {
		// 		hand.push(random_letter);
	}
	return hand;

	// for (let letter of hand) {
	// 	if (letter in letterCount) {
	// 		letterCount[letter] += 1
	// 	} else {
	// 		letterCount[letter] = 1
	// 	}
	// 	if (letter in letterPool) {

	// 	}
	// }

	// DEBUG: letter count
	// The letters should be randomly drawn from a pool of letters
	// This letter pool should reflect the distribution of letters as described in the table below
	// There are only 2 available C letters, so drawLetters cannot ever return more than 2 Cs
	// Since there are 12 Es but only 1 Z, it should be 12 times as likely to draw an E as a Z
};

console.log(drawLetters());

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
