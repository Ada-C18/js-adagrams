# Explanations of Data Structures and Methods Used

### line 33
`Object.freeze(POOL);`<br/>
This prevents accidental mutation of POOL. Ultimately, my code didn't generate any errors caused by mutating POOL but I thought that it was prudent to include, just in case, particularly since a project requirement for at least one wave is that the code does not mutate POOL.

### lines 36-38
```
let freqList = Object.entries(POOL)
  .map(([letter, value]) => Array(value).fill(letter))
  .flat();
```
`Object.entries(POOL)` creates a list from POOL such that an outer list element holds each of POOL's key-value pairs separate inner list elements. I then use `map` to take the letters and values from POOL and, for each letter, create a new array of `${value}` elements that are all each `${letter}`. I then use `flat` to pull the elements out of the inner lists and concatenate them into one (no longer nested) list.

### lines 49-56
```
let hand = Array(10)
  .fill(0)
  .map(() => {
    let index = Math.floor(Math.random() * freqList.length);
    let result = freqList[index];
    freqList.splice(index, 1);
    return result;
  });
```
`Array(10` creates a list of 10 empty items that are then filled with 0 using `fill`. I filled the items so that I could get actual elements to reassign through the `map` function. I then use `map` to replace the zeros with the randomly selected letters. `map` assigns a random number between [0,length of freqList) to `index`, which is then used to select the letter corresponding to that index value from `freqList` (declared earlier in the `drawLetters` function). I then remove the selected letter from `freqList` by using `splice`. I could also have done this last operation by slicing the list on either side of the index number I wished to remove and then concatenating the two sides, but that would have taken longer runtime. The use of `freqList.length` instead of a fixed length within the `map` function ensures that the random number assignation will take into account the reduced length as a result of the letter(s) removed. Although I am mutating `freqList` when I generate `hand`, because `freqList` has block scope, it is regenerated with all 98 letter elements each time `drawLetters` is called.

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
`let inputIterator = inputMap[Symbol.iterator]();`<br/>
This creates an iterator that yields the inputMap's key-value pairs one by one, formatted as an array (`[key, value]`). I later use it in the for...of loop to iterate through inputMap's keys. I used a for...of loop instead of `Map.forEach()` because I needed to break the loop to return false if the letters in the word passed in to `usesAvailableLetters` were not in the hand that was passed in or were used more times than the letter was available in the hand.
