const reverseStr = (str: string): string => {
  return str.toLowerCase().split('').reverse().join('');
}

export default reverseStr;