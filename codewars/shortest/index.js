var str = 'bitcoin take over the world maybe who knows perhaps';

// function findShort(str){
//     return str.split(' ').map(w => w.length).sort((a, b) => a -b)[0];
// }
// console.log(findShort(str));

// const findShort = str => str.split(' ').map(w => w.length).sort((a, b) => a -b)[0];
// console.log(findShort(str));

function findShort(str) {
    // return Math.min(...str.split(' ').map(w => w.length));
    return Math.min.apply(null, str.split(' ').map(w => w.length));
}
console.log(findShort(str));