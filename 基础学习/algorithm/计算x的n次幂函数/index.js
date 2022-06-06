var myPow = function(x, n) {
  if (-100 < x < 100) {
    return
  }
  let res = x
  for (let i = 1; i < n; i++) {
    res = res * x
  }
  return res
};

console.log(myPow)