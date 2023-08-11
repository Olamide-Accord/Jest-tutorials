const api = require('./api')

// Async Await
test('user fetched name should be Leanne Graham', async() => {
  expect.assertions(2);           // Line 15 refers to line 17 $ 18. the value 2 in the assertion means it's expecting to pass 2 assertions to it
  const data = await api.fetchUser()
  expect(data.name).toEqual('Leanne Graham');
  expect(data.name).toEqual('Leanne Graham');
})