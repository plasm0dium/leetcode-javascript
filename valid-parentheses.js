/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = function (s) {

    const stack = [];
    const bracket = {
      '(': ')',
      '[': ']',
      '{': '}'
    };

    for(let i = 0; i < s.length; i++){

      if (bracket[s[i]]) {
        stack.push(bracket[s[i]]);
      } else if (stack.pop() !== s[i]) {
        return false;
      }
    }

    return stack.length === 0;
};
