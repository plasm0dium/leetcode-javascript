/**
  * @param {string} s
  * @return {string}
  */

const reverseString = function (s) {

  let result = "";

  if (s.length < 2) return s;

  for(let i = s.length - 1; i >= 0; i--) {
      result += s[i];
  }

  return result;
};


const reverseStringInPlace = function (s) {

  if (s.length < 2) return s;

  const strLength = s.length;
  const splitStr = s.split('');

  for(let i = 0; i < Math.floor(strLength / 2); i++) {
    const temp = splitStr[i];
    splitStr[i] = splitStr[strLength - 1 - i];
    splitStr[strLength - 1 - i] = temp;
  }

  return splitStr.join('');
};
