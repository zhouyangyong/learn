const num = ['c', 'a', 'z', 'y'];
const num2 = [1, 10, 2, 28];
function foo(a, b) {
    return a - b > 0;
}
console.log(num2.sort(foo));
console.log(num.sort());