// 二叉树的锯齿形层次遍历
// 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

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

// 返回锯齿形层次遍历如下：
// [
//   [3],
//   [20,9],
//   [15,7]
// ]

var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let res = [],
    queue = [root],
    flag = 0;
  while (queue.length) {
    let temp = [],
      ans = [];
    flag++;
    for (let i = 0; i < queue.length; i++) {
      ans.push(queue[i].val);
      if (queue[i].left) temp.push(queue[i].left);
      if (queue[i].right) temp.push(queue[i].right);
    }
    if (flag % 2 === 0) {
      ans.reverse();
    }
    res.push(ans);
    queue = temp;
  }
  return res;
};

console.log(zigzagLevelOrder(tree));
