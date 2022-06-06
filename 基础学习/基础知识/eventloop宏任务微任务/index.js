console.log(1);
async function async1() {
  await async2();
  console.log(2);
}
function async2() {
  console.log(3);
}
async1();
setTimeout(() => {
  console.log(4);
  Promise.resolve().then(() => {
    console.log(5);
  });
}, 0);

new Promise((resolve, reject) => {
  console.log(6);
  setTimeout(() => {
    console.log(7);
    resolve(8);
  }, 0);
}).then((res) => {
  console.log(9);
  setTimeout(() => {
    console.log(res);
  }, 0);
});

// 1 3 6 2 4 5 7 9 8
setTimeout((_) => console.log(4));
new Promise((resolve) => {
  resolve();
  console.log(1);
}).then((_) => {
  console.log(3);
});
console.log(2);

//1 2 3 4

const first = () =>
  new Promise((resolve, reject) => {
    console.log(3);
    let p = new Promise((resolve, reject) => {
      console.log(7);
      setTimeout(() => {
        console.log(5);
        resolve(6); // 不生效，因为p的Promise状态一旦改变就不会再变化了
      }, 0);
      resolve(1);
    });
    resolve(2);
    p.then((arg) => {
      console.log(arg);
    });
  });

first().then((arg) => {
  console.log(arg);
});
console.log(4);

// 3 4 7 1 2 5
