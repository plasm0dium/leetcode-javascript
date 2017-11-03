/**
 * @param {string} s
 * @return {number}
 */

const firstUniqChar = function(s) {

  const map = {};
  let index;

  for (let i = 0, len = s.length; i < len; i++) {

    if (map[s[i]] !== undefined) {
        map[s[i]] = 'dup';
    } else {
        map[s[i]] = i;
    }
  }

  const key = Object.keys(map);

  for (let i = 0; i < key.length; i++) {
    if (map[key[i]] !== 'dup') {
      index = map[key[i]];
      break;
    }
  }

  return index !== undefined ? index : -1;
};
