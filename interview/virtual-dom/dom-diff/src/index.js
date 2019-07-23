import { createElement, render, renderDOM } from './element';

// ul.list>li.item*3

// let virtualDOM = createElement('ul', {
//   class: 'list'
// }, [
//   createElement('li', {class: 'item'},['周杰伦']),
//   createElement('li', {class: 'item'},['王力宏']),
//   createElement('li', {class: 'item'},['林俊杰'])
// ])

// let el = render(virtualDOM);
// renderDOM(el, document.getElementById('root'));

// console.log(virtualDOM);

import diff from './diff';
import patch from './patch';

let virtualDOM = createElement('ul', {
  class: 'list-group'
},[
  createElement('li', { class: 'item' }, ['a']),
  createElement('li', { class: 'item' }, ['b']),
  createElement('li', { class: 'item' }, ['c'])
]
)

let virtualDOM2 = createElement('ul', {
  class: 'list-group'
},[
  createElement('li', { class: 'item' }, ['1']),
  createElement('li', { class: 'item' }, ['b']),
  createElement('p', {class:'page'}, [
    createElement('a', {class: 'link', href: 'https://www.so.com', target: '_blank'}, ['so'])
  ]),
  createElement('li', { class: 'item current'}, ['wkk'])
]
)

let el = render(virtualDOM);
renderDOM(el, document.getElementById('root'));

let patches = diff(virtualDOM, virtualDOM2);
console.log(patches);
patch(el, patches);