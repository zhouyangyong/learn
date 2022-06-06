var isValid = function (s) {
  let stack = []
  let map = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  for (let char of s) {
    if(char in map) {
      stack.push(char)
    } else {
      if(!stack.length || char !== map[stack.pop()]) {
        return false
      }
    }
  }
  return !stack.length
}

console.log(isValid('({})()((((()))))'))