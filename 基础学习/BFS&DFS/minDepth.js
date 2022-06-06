// 给定二叉树 [3,9,20,null,null,15,7]，返回它的最小深度 2。

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
// 判断当前节点是否是根，并且为空,是的话,返回0
// 当前节点的左右节点都是null,也就是叶子节点时,此时就是目标节点,最小深度,返回1
// 当前节点的左节点不为null,找左子树的深度
// 当前节点的右节点不为null,找右子树的深度
// 比较两者,返回的就是3和4条件的最小值,并且加1

var minDepth1 = (root) => {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  let max = 10000;
  if (root.left) max = Math.min(max, minDepth(root.left));
  if (root.right) max = Math.min(max, minDepth(root.right));
  return max + 1;
};

// 非递归思路

var minDepth2 = (root) => {
  if (!root) return 0;
  let stack = [root],
    ans = 0;
  while (stack.length) {
    let temp = [];
    ans++;
    for (let i = 0; i < stack.length; i++) {
      if (stack[i].left === null && stack[i].right === null) return ans; // 最小深度判断
      if (stack[i].left) temp.push(stack[i].left);
      if (stack[i].right) temp.push(stack[i].right);
    }
    stack = temp;
  }
  return ans;
};

console.log(minDepth2(tree));
