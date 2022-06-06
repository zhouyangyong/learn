const m = new Map()

m.set(1, 'red')
m.set(2, 'blue')
m.set(3, 'green')

m.forEach(v => { console.log('v',v)})

const arr = [{a:1, b: 2}]

const new1 = arr.map(item => {
  console.log('item', item)
  delete item.a
  return { ...item }
} )
console.log('arr', arr, new1)