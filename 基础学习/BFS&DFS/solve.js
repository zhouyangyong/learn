const tree = {
  name: "root",
  children: [
    {
      name: "c1",
      children: [
        {
          name: "c11",
          children: [],
        },
        {
          name: "c12",
          children: [],
        },
      ],
    },
    {
      name: "c2",
      children: [
        {
          name: "c21",
          children: [],
        },
        {
          name: "c22",
          children: [],
        },
      ],
    },
  ],
};

// 栈模拟递归写法
// 每次递归，会把新的函数放入栈中，递归不做尾调优的话，很容易爆栈。
function solve(root) {
  if (!root) {
    return [];
  }
  let stack = [];
  let result = [];
  stack.push(root);
  while (stack.length) {
    let node = stack.pop();
    if (node === null) continue;
    result.push(node.name);
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
  }
  return result;
}

console.log(solve(tree));
