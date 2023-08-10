const isAnagram = require('./anagrams');

// test("check if anagram function exists", () => {
//   expect(isAnagram).toBeDefined();
// })

test("check if anagram function typeof is a function", () => {
  expect(typeof isAnagram).toEqual('function');
})

test("'cinema' is an anagram of 'iceman", () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy();
})

test("'dormitory' is an anagram of 'dirty room", () => {
  expect(isAnagram('dormitory', 'dirty room')).toBeTruthy();
})

test("'hello' is NOT an anagram of 'aloha", () => {
  expect(isAnagram('hello', 'aloha')).toBeFalsy();
})