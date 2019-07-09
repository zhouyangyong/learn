function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let a1 = new TreeNode(1);
let a2 = new TreeNode(2);
let a3 = new TreeNode(3);

a1.right = a2;
a2.left = a3;

var inorderTraversal = (root) => {
  var stack = [], // 堆栈
      result = [], // 解脱 左边出来了
      cur; // 当前的
  cur = root;
  // 堆栈中还有未处理的
  while(stack.length > 0 || cur !== null) {
    console.log(stack);
    // 节点不为空
    if(cur !== null) {
      stack.push(cur);
      cur = cur.left; // null
    } else {
      cur = stack.pop(); // 第一次是不是最左侧的叶子?
      result.push(cur.val);
      cur = cur.right;
    }
  }
  return result;
}

console.log(inorderTraversal(a1));
