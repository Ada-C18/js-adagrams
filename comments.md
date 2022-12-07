# Explanations of Data Structures and Methods Used

### line 33
`Object.freeze(POOL);`<br/>
This prevents accidental mutation of `POOL`. Ultimately, my code didn't generate any errors caused by mutating `POOL` but I thought that it was prudent to include, just in case, particularly since a project requirement for at least one wave is that the code does not mutate `POOL`.

### lines 36-38
```
const freqList = Object.entries(POOL)
  .map(([letter, value]) => Array(value).fill(letter))
  .flat();
```
`Object.entries(POOL)` creates an array from `POOL` such that an outer array holds an inner array for each of `POOL`'s key-value pairs, such that each key and value are stored as separate elements within an inner array (e.g., `{ key1: value1, key2: value2}` would become `[[key1, value1], [key2, value2]]`). I then use `map` to take the letters and values from `POOL` and, for each letter, create a new array of `${value}` elements that are all each `${letter}`. I then use `flat` to pull the elements out of the inner arrays and concatenate them into one (no longer nested) array.

### lines 49-56
```
const hand = Array(10)
  .fill(0)
  .map(() => {
    const index = Math.floor(Math.random() * freqList.length);
    const result = freqList[index];
    freqList.splice(index, 1);
    return result;
  });
```
`Array(10` creates a array of 10 empty items that are then filled with 0 using `fill`. I filled the items so that I could get actual elements to reassign through the `map` function. I then use `map` to replace the zeros with the randomly selected letters. `map` assigns a random number between [0,length of freqList) to `index`, which is then used to select the letter corresponding to that index value from `freqList` (declared earlier in the `drawLetters` function). I then remove the selected letter from `freqList` by using `splice`. I could also have done this last operation by slicing the array on either side of the index number I wished to remove and then concatenating the two sides, but that would have taken longer runtime. The use of `freqList.length` instead of a fixed length within the `map` function ensures that the random number assignation will take into account the reduced length as a result of the letter(s) removed. Although I am mutating `freqList` when I generate `hand`, because `freqList` has block scope, it is regenerated with all 98 letter elements each time `drawLetters` is called.

### lines 61-76: use of Map data structure
I used `Map` instead of `Object` as the data structure returned by `makeMap`, `makeWordMap` and `makeHandMap` because `Map` is iterable. I used `Map` instead of `Array` because `Map` has a hashtable as the underlying data structure, so lookups are faster, and because `Map` holds key-value pairs, I could reduce the value associated with each letter rather than removing the letter from the array entirely.

### lines 61-64
```
const makeMap = (elem, mapObj) =>
  mapObj.has(elem)
    ? mapObj.set(elem, mapObj.get(elem) + 1)
    : mapObj.set(elem, 1);
```
This helper function checks if the passed in Map object has the value passed in as `elem` as a key. If `elem` already exists as a key, the function adds 1 to the value of `elem`. If `elem` does not yet exist as a key in the Map object, the function adds `elem` as a key with a value of 1. Technically, I did learn ternaries as part of the curriculum, because I first saw them in the 'absurd one-liner' you posted as a solution for `mystery3` following the roundtable on JavaScript testing.

### lines 66-70
```
const makeWordMap = (word) => {
  const wordMap = new Map();
  Array.from(word.toUpperCase()).forEach((elem) => makeMap(elem, wordMap));
  return wordMap;
};
```
This function takes in a word (a string) and returns a Map object that contains each of the letters in the word as a key (with all keys as uppercase letters), with the number of times that letter appears in the word as the associated value. To do so, it generates a new Map object, converts all the letters in the word string to uppercase, then creates an array from the word with each (uppercase) letter as an element. The `forEach` loop then uses the `makeMap` helper function to set each unique letter in the word as a key in the Map object, with the number of times that the letter appears in the word as the key's value. The function then returns the updated Map object.

### lines 72-76
```
const makeHandMap = (hand) => {
  const handMap = new Map();
  hand.forEach((elem) => makeMap(elem, handMap));
  return handMap;
};
```
This function takes in an array of ten strings (`hand`), where each element in the array is a single letter. (Note: This function would work for any array but I am writing about it in the context in which it is being used.) The function returns a Map object that contains each of the unique elements (letters) in the array as keys, with the number of times that the key appears in the array as the associated value. To do so, it generates a new Map object, then loops through the array using `forEach`. The `forEach` loop uses the `makeMap` helper function to set each unique element as a key in the Map object, with the number of times that the key appears in the array as the associated value. The function then returns the updated Map object.

### line 83
`const inputIterator = inputMap[Symbol.iterator]();`<br/>
This creates an iterator that yields the inputMap's key-value pairs one by one, formatted as an array (`[key, value]`). I later use it in the for...of loop to iterate through inputMap's keys. I used a for...of loop instead of `Map.forEach()` because I needed to break the loop to return false if the letters in the word passed in to `usesAvailableLetters` were not in the hand that was passed in or were used more times than the letter was available in the hand.

### lines 168-188
```
const [hsWord, highestScore] = words
    .map((word) => [word, scoreWord(word)])
    .reduce(
      (accumulator, currentValue) => {
        const [thisWord, thisScore] = currentValue;
        const [hWord, hScore] = accumulator;

        if (thisScore > hScore) {
          accumulator = [thisWord, thisScore];
        } else if (thisScore === hScore) {
          if (
            hWord.length < 10 &&
            (thisWord.length < hWord.length || thisWord.length === 10)
          ) {
            accumulator = [thisWord, thisScore];
          }
        }
        return accumulator;
      },
      ["", 0]
    );
```
`const [hsWord, highestScore]` uses decomposition to create variables from the elements of the array returned from the right side of the statement (in this case, the array that is returned contains two elements: a string and an integer).<br/><br/>
`words.map((word) => [word, scoreWord(word)])`<br/>
This transforms the array of words (`words`, passed in as an argument) into an array of nested arrays, in which the inner arrays each contain a word (previously an element of `words`) and its corresponding score.
<br/><br/>
`.reduce((accumulator, currentValue) => {...}, ["", 0];`<br/>
I use the reduce method to compare the various array elements with each other, to determine the highest scoring word, as a means to return both the word and its score. Here, the accumulator will function as the array holding the highest scoring word and its corresponding score. The accumulator is initialized to `["", 0]`, so that if the list of words is composed of only empty strings, an empty string scoring zero will be returned.
<br/><br/>
```
const [thisWord, thisScore] = currentValue;
const [hWord, hScore] = accumulator;
```
I use decomposition to create individual variables that will hold the current word being compared, the score associated with that word, the highest scoring word thus far and the score associated with the highest scoring word.
<br/><br/>
```
if (thisScore > hScore) {
  accumulator = [thisWord, thisScore];
}
```
The if statement compares the score of the curent word being inspected to the score of the highest scoring word (thus far), if the score of the current word is greater than the current high score, then the accumulator is updated with the current word and the current score.
<br/><br/>
```
else if (thisScore === hScore) {
  if (
    hWord.length < 10 &&
    (thisWord.length < hWord.length || thisWord.length === 10)
  ) {
    accumulator = [thisWord, thisScore];
  }
}
```
The `else if` statement only applies if the score of the current word being inspected is strictly equal to that of the highest scoring word (thus far). If the scores are equal, the inner if statement tests for the tie-breaking rules. As I've written it, to enter the if statement, the highest-scoring word (thus far) has to be shorter than 10 letters long. In addition, the current word must either be shorter than the highest-scoring word or must be ten letters long. If the words being compared meet the if statement criteria, the accumulator is updated with the current word and the current score.
<br/><br/>
`return accumulator;`<br/>
After the reduce callback function has assessed the if/else if statements, the function returns the accumulator, which would have been updated if the current word being inspected met the if/else if statement criteria. `reduce` would then move on to the next element (containing a word and its associated score) and compare it to the returned accumulator value, via the callback function.