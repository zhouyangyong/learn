// function sleep(time) {
//   return new Promise((resolve, reject) => setTimeout(resolve, time))
// }

// sleep(3000)
//   .then(() => {
//     console.log('我是 Promise');
//   })

// function *sleepGenerator(time) {
//   yield new Promise((resolve, reject) => {
//     setTimeout(resolve, time)
//   })
//   console.log('bbb')
// } 

// sleepGenerator(1000)
//   .next()
//   .value
//   .then(() => {
//     console.log('我是 generator');
//   })

// console.log(sleepGenerator().next().value.then(() => {
//   console.log('1111');
// }))

// async await

// function sleep(time) {
//   return new Promise((resolve, reject) => setTimeout(resolve, time))
// }

// async function output(time) {
//   let out = await sleep(1000);
//   console.log('我是 async await');
//   return out;
// }
// output();


// 回调
function sleep(time, fn) {
  if(typeof fn === 'function') {
    setTimeout(fn, time);
  }
}

sleep(1000, () => console.log('我是回调'));