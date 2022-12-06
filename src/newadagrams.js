
getMax = (object) => {
  return Object.keys(object).filter((x) => {
    return object[x] == Math.max.apply(null, Object.values(object));
  });
};
 class Adagrams{
    Constructor(letterDistribution,letterScore){
        this.hand=newHand(letterDistribution);
        this.letterScore=letterScore;
        

    }
      scoreWord = (word) => {
        let wordList = word.split("");
        let total = 0;
        // for (let letter in word) {
        for (let i = 0; i < word.length; i++) {
          let letter = wordList[i];
          total += this.letterScore[letter.toUpperCase()];
        }
        if (word.length >= 7 && word.length <= 10) {
          total += 8;
        }
        return total;
      }
       
      highestScoreFrom = (words) => {
        let Winner = {};
        let AllWords = {};
        let score = 0;
      
        for (let word of words) {
          score = scoreWord(word);
          AllWords[word] = score;
        }
      
        let Winners = getMax(AllWords);
        let win = Winners[0];
      
        if (Winners.length > 1) {
          if (Winners.find((element) => element.length === 10)) {
            win = Winners.find((element) => element.length === 10);
          } else {
            win = Winners.sort((a, b) => a.length - b.length)[0];
          }
        }
        Winner.word = win;
        Winner.score = scoreWord(win);
        return Winner;
      
}
};

class Hand {
    constructor(letterDistribution){
        this.letterDistribution=letterDistribution;

        const letterDistribution = {
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
          let userLetters = [];
          let allLetters = [];
            drawLetters = () => {
            // Implement this method for wave 1
            for (const letter in letterDistribution) {
              for (let i = 0; i < letterDistribution[letter]; i++) {
                allLetters.push(letter);
              }
            }
          
            while (userLetters.length < 10) {
              const randomLetterIndex = Math.floor(Math.random() * allLetters.length);
              const randomLetter = allLetters[randomLetterIndex];
          
              userLetters.push(randomLetter);
              allLetters.splice(randomLetterIndex, 1);
            }
            return userLetters;
          }
          
            usesAvailableLetters = (input, lettersInHand) => {
            // Implement this method for wave 2
            const userInput = input.toUpperCase();
            const lettersInHandCopy = [...lettersInHand];
          
            for (const letter in userInput) {
              if (lettersInHandCopy.includes(userInput[letter])) {
                lettersInHandCopy.splice(userInput[letter], 1);
                continue;
              }
              return false;
            }
          
            return true;
          };
    }
};