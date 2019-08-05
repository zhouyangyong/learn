// let user = {
//   name: 'John'
// }
// let admin = user;

// user = null;

// console.log(admin.name);

function marry(man, woman) {
  // woman.husban = man;
  man.wife = woman;
  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  name: 'John'
}, {
  name: 'Ann'
})

console.log(family);


//         global
//           |
//       Object(Family)
//       |             |      
// Object(father) <-> Object(mother)