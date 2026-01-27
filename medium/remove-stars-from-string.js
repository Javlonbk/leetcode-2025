/**
 * @param {string} s
 * @return {string}
 */
function removeStars (s) {
  let stack = [];

  for (let ch of s) {
    if (ch === "*"){
      stack.pop();
    } else {
      stack.push(ch);
    }
  }

  return stack.join('');
};
 

console.log(removeStars("leet**cod*e"))