const functions = require('./functions');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database initialized...')
// const closeDatabase = () => console.log('Database Closed...')

const nameCheck = () => console.log('Checking Name...')

describe('Checking Names', () => {
  beforeEach(() => nameCheck());
  test('User is Jeff', () => {
    const user = 'Jeff'
    expect(user).toBe('Jeff')
  })
  test('User is Karen', () => {
    const user = 'Karen'
    expect(user).toBe('Karen')
  })
})

// To be
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4)
})

// not
test('Adds 2 + 2 to NOT be equal 4', () => {
  expect(functions.add(2, 2)).not.toBe(5)
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull()
})

// toBeFalsy
test('Should be false', () => {
  expect(functions.checkValue(null)).toBeFalsy()
})

test('Should be false', () => {
  expect(functions.checkValue(null)).toBeFalsy()
})

// toEqual
test('User should be Olamide Akodu object', () => {
  expect(functions.createUser()).toEqual({ firstName: 'Olamide', lastName: 'Akodu'})
})

// Less than and greater than
test('should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
})
// test('should be under 1600', () => {
//   const load1 = 800;
//   const load2 = 850;
//   expect(load1 + load2).toBeGreaterThan(1600);
// })
// test('should be under 1600', () => {
//   const load1 = 800;
//   const load2 = 700;
//   expect(load1 + load2).toBeLessThanOrEqual(1600);
// })

// Regex
// test("There is no I in team", () => {
//   expect('teami').not.toMatch(/I/);
// })

// Arrays
// test('Admin should be in username', () => {
//   usernames = ['john', 'karen', 'admin'];
//   expect(usernames).toContain('admin');
// })

// Working with ASYNC data
// Promise
