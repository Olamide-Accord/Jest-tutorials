interface Functions{
  add: (a:number, b:number) => number,
  isNull: () => null,
  checkValue: (x: string | number | null) => string | number | null,
}

const functions: Functions = {
  add: (a, b) => a + b,
  isNull: () => null,
  checkValue: (x) => x,

}

export default functions