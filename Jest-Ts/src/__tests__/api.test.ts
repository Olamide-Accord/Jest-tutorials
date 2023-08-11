import fetchUser from "../api";

test('user fetched name should be Leanne Graham', async() => {
  expect.assertions(1);
  const data = await fetchUser()
  expect(data.name).toEqual('Leanne Graham');
})