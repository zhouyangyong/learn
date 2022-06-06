// 层次遍历

const tree = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null,
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

// 返回其层次遍历结果
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

var levelOrder = function (root) {
  if (!root) return [];
  let res = [],
    queue = [root];
  while (queue.length) {
    let temp = [],
      ans = [];
    for (let i = 0; i < queue.length; i++) {
      ans.push(queue[i].val);
      if (queue[i].left) temp.push(queue[i].left);
      if (queue[i].right) temp.push(queue[i].right);
    }
    res.push(ans);
    queue = temp;
  }
  return res;
};

console.log(levelOrder(tree));
