// a word, phrase, or name formed by rearranging the 
// letters of another, such as spar, formed from rasp.
function anagram (str1, str2) {
  if (str1.length !== str2.length) return false;

  let str1Counter = {};
  let str2Counter = {};

  for (let key of str1) {
    str1Counter[key] = ++str1Counter[key] || 1;
  }

  for (let key of str2) {
    str2Counter[key] = ++str2Counter[key] || 1;
  }

  for (let key in str1Counter) {
    if (str1Counter[key] !== str2Counter[key]) return false
  }

  return true;
}


anagram('maam', 'amma')
anagram('maam', 'ammaa')