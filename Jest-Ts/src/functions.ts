const functions = {
  add: (a:number, b:number) => a + b,
  isNull: () => null,
  checkValue: (x: any) => x,
  createUser: () => {
    const user = {
      firstName: "Olamide"
    }
    user['lastName'] = 'Akodu';
    return user
  },
}

export default functions