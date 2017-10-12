/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {

  const numToStr = x.toString();
  const strLength = numToStr.length;
  const obj = {};
  let result = '';

  for(let i = strLength - 1; i >= 0; i--) {
    obj[i] = numToStr[i];
  }

  for(let j = strLength - 1; j >= 0; j--) {
    if (obj[j] === '-') continue;

    result += obj[j];
  }

  if (parseInt(result) >= 2147483651) {
    return 0;
  }

  if (numToStr[0] === '-') {
    result = numToStr[0] + result;
  }

  return parseInt(result);
};
