import { createElement, render, renderDOM } from './element';

// ul.list>li.item*3


let virtualDOM = createElement('ul', {
  class: 'list'
}, [
  createElement('li', {class: 'item'},['周杰伦']),
  createElement('li', {class: 'item'},['王力宏']),
  createElement('li', {class: 'item'},['林俊杰'])
])

let el = render(virtualDOM);
renderDOM(el, document.getElementById('root'));

console.log(virtualDOM);