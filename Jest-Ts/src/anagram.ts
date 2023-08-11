function isAnagram(str1:string, str2:string):boolean {
  return formatStr(str1) === formatStr(str2);
}

// Helper function
function formatStr(str: string): string {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

export default isAnagram;