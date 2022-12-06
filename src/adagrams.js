// class Adagrams {
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

const letterPoints = {
	A: 1,
	B: 3,
	C: 3,
	D: 2,
	E: 1,
	F: 4,
	G: 2,
	H: 4,
	I: 1,
	J: 8,
	K: 5,
	L: 1,
	M: 3,
	N: 1,
	O: 1,
	P: 3,
	Q: 10,
	R: 1,
	S: 1,
	T: 1,
	U: 1,
	V: 4,
	W: 4,
	X: 8,
	Y: 4,
	Z: 10,
};

// WAVE 1
// Implement this method for wave 1
// TODO
// - later: refactor using closure -> change hand length

// static drawLetters() {
export const drawLetters = () => {
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
// Implement this method for wave 2
// usesAvailableLetters(input, lettersInHand) {
export const usesAvailableLetters = (input, lettersInHand) => {
	// input: word str, array of letter strings in hand
	// output: true if all input chars in lettersInHand and <= letter count, else false

	const handDict = {};
	for (let letter of lettersInHand) {
		if (letter in handDict) {
			handDict[letter] += 1;
		} else {
			handDict[letter] = 1;
		}
	}

	let upperCaseInput = input.toUpperCase();

	for (let letter of upperCaseInput) {
		// if inputDict doesn't contain the letter default to 0
		const currentCount = handDict[letter] || 0;
		if (currentCount === 0) {
			// if no more letters left or no letter at all in hand
			return false;
		} else {
			handDict[letter] = currentCount - 1;
		}
	}

	return true;
};

// WAVE 3
// Implement this method for wave 3
// scoreWord(word) {
export const scoreWord = (word) => {
	let points = 0;

	// handle empty input
	if (word.length === 0) {
		// if (word === null) {
		// console.log(points);
		return points;
	}

	for (let letter of word.toUpperCase()) {
		// console.log(`letter: ${letter}`);
		// console.log(`letter pt: ${letterPoints[letter]}`);
		if (letter in letterPoints) {
			points += letterPoints[letter];
		}
		// console.log(points);
	}

	if (word.length > 6 && word.length < 11) {
		points += 8;
	}

	return points;
};

// TODO:
// fix find highest bug -> DONE
// fix tie bug - 10 letter word returned

// WAVE 4
// Implement this method for wave 4
// highestScoreFrom(words) {
export const highestScoreFrom = (words) => {
	// input: words array
	// output: highest score dict { word: 'str', score: points }

	// 1. calculate scores for each word
	let allWordScores = {};
	for (let word of words) {
		allWordScores[word] = scoreWord(word);
	}
	// console.log("all scores dict: ", allWordScores);

	// 2. find highest word, score pair in allWordScores dict
	const highestScoreDict = { score: 0, word: "" };

	// console.log("score dict before loop: ", highestScoreDict);

	for (const [currentWord, currentScore] of Object.entries(allWordScores)) {
		// console.log(`current word: ${currentWord}`);
		// console.log(`current score: ${currentScore}`);
		let highestScoreWord = highestScoreDict.word;

		if (currentScore > highestScoreDict.score) {
			highestScoreDict.score = currentScore;
			highestScoreDict.word = currentWord;
			// highestScoredWords = [currentWord];
			// console.log("score dict: ", highestScoreDict);
		} else if (currentScore === highestScoreDict.score) {
			// tie conditions: word length
			// condition: same len and score, return first one in the list
			if (currentWord.length === highestScoreWord.length) {
				// highestScoreDict.score = currentScore;
				// highestScoreDict.word = currentWord;
				console.log("same length", highestScoreDict);
				return highestScoreDict;
			}
			// } else if (currentWord.length === 10) {

			// condition: 10 letter word wins
			if (currentWord.length === 10) {
				highestScoreDict.score = currentScore;
				highestScoreDict.word = currentWord;
				// console.log("10 length", highestScoreDict);
				return highestScoreDict;
			} else if (highestScoreWord.length === 10) {
				return highestScoreDict;
			}

			// condition: shortest of 2, current shorter than highest
			if (currentWord.length < highestScoreWord.length) {
				highestScoreDict.score = currentScore;
				highestScoreDict.word = currentWord;
				return highestScoreDict;
			}
		}
	}
	// console.log("score dict after loop: ", highestScoreDict);
	return highestScoreDict;
};
// }

// export default Adagrams
