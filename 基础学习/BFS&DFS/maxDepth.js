// 给定二叉树 [3,9,20,null,null,15,7]，返回它的最大深度 3 。

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
// 递归思路
var maxDepth1 = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// 非递归思路
// BFS，广度优先遍历
// 每一次用一个数组temp保存上一层的所有节点，每次计数器count+1
// 当temp为空的时候，也就是此时都是叶子节点情况
var maxDepth2 = function (root) {
  if (!root) return 0;
  let queue = [root],
    res = 0;
  while (queue.length) {
    let temp = [];
    res++;
    for (let i = 0; i < queue.length; i++) {
      if (queue[i].left) temp.push(queue[i].left);
      if (queue[i].right) temp.push(queue[i].right);
    }
    queue = temp;
  }
  return res;
};

console.log(maxDepth2(tree));
