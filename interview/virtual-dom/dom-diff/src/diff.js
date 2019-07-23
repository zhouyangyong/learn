import { setAttr, Element } from './element';

function diff(oldTree, newTree) {
  let patches = {}; // 序号，在这个结点上面
  let index = 0;  // 第几个节点的改变
  walk(oldTree, newTree, index, patches);
  return patches;
}

function walk(oldNode, newNode, index, patches) {
  // props, children
  let current = []; // 补丁的数组
  if (!newNode) {
    current.push({
      type: 'REMOVE',
      index
    });
  } else if (isString(oldNode) && isString(newNode)) {
    // 文本结点
    if (oldNode !== newNode) {
      current.push({
        type: 'TEXT',
        text: newNode
      });
    }
  } else if (oldNode.type === newNode.type) {
    // 属性，子结点
    // 属性是否修改
    let attr = diffAttr(oldNode.props, newNode.props);
    if (Object.keys(attr).length > 0) {
      current.push({
        type: 'ATTR',
        attr
      });
    }
    // walk()
    diffChildren(oldNode.children, newNode.children, patches);
  } else {
    // 节点 类型不一样
    current.push({
      type: 'REPLACE',
      newNode
    })
  }
  if(!oldNode) {
    current.push({
      type: "REPLACE",
      newNode
    })
  }
  if (current.length) {
    patches[index] = current
  }
}

function isString(obj) {
  return typeof obj === 'string';
}

function diffAttr(oldAttrs, newAttrs) {
  let patch = {};
  for (let key in oldAttrs) {
    if (oldAttrs[key] !== newAttrs[key]) {
      patch[key] = newAttrs[key];
    }
  }
  for (let key in newAttrs) {
    if (!oldAttrs.hasOwnProperty(key)) {
      patch[key] = newAttrs[key];
    }
  }
  return patch;
}

let num = 0;
function diffChildren(oldChilren, newChilren, patches) {
  oldChilren.forEach((child, index) => {
    walk(child, newChilren[index], ++num, patches);
  })
}



export default diff;