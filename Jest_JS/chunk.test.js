const chunkArr = require('./chunk');

test('check if the chunk array function exists', () => {
  expect(chunkArr).toBeDefined()
})

test('chunk in array of 10 values with the length of 2', () => {
  const numbers = [1,2,3,4,5,6,7,8,9,10];
  const len = 2;
  const chunked = chunkArr(numbers, len);
  expect(chunked).toEqual([[1,2], [3,4], [5,6], [7,8], [9,10]])
})

test('chunk in array of 3 values with the length of 1', () => {
  const numbers = [1,2,3];
  const len = 1;
  const chunked = chunkArr(numbers, len);
  expect(chunked).toEqual([[1], [2], [3]])
})