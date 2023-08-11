import functions from '../functions'

test('check if the sum of 2 + 2 will give 4', () => {
  expect(functions.add(2,2)).toBe(4);
})

test('Adds 2 + 2 to NOT be equal 4', () => {
  expect(functions.add(2, 2)).not.toBe(5)
});


test('Should be false', () => {
  expect(functions.checkValue(null)).toBeFalsy()
})

test('Should be false', () => {
  expect(functions.checkValue('Hello')).toBeTruthy()
})


test('should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
})