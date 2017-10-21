/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

const findTheDifference = function(s, t) {

    const map = {};

    for (let i = 0; i < s.length; i++) {
      if (map[s[i]]) {
        map[s[i]] = false;
      } else {
        map[s[i]] = true;
      }
    }

    for (let j = 0; j < t.length; j++) {

      if (map[t[j]]) {
        map[t[j]] = false;
      } else {
        map[t[j]] = true;
      }
    }

    return Object.keys(map).find((item) => (map[item] && item));
};
