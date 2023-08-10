const reverseStr = require('./reverseString')
test('reverse string function exists', () => {
  expect(reverseStr).toBeDefined();
})

test('reverse string function exists', () => {
  expect(typeof reverseStr).toEqual('function');
})

test('Does the string reverse', () => {
  expect(reverseStr('hello')).toEqual('olleh')
})

test('Does the string reverse with uppercase', () => {
  expect(reverseStr('Hello')).toEqual('olleh')
})