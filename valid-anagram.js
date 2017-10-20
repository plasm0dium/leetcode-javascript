/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = function (s, t) {

    const map = {};

    if (s.length < 1 && t.length < 1) return true;

    for (let i = 0; i < s.length; i++) {
      if (map[s[i]]) {
        map[s[i]] += 1;
      } else {
        map[s[i]] = 1;
      }
    }

    for (let j = 0; j < t.length; j++) {
      if (map[t[j]]) {
        map[t[j]] -= 1;
      } else {
        map[t[j]] = 1;
      }
    }

    return Object.keys(map).every((element) => map[element] === 0);
};
