// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
// 输入：head = [1,2,3,4,5], left = 2, right = 4
// 输出：[1,4,3,2,5]

var reverseBetween = function (head, left, right) {
  if(!head || !head.next || left === right) return head

  
};

console.log(reverseBetween([1, 2, 3, 4, 5], 2, 4));
console.log(reverseBetween([5], 1, 1));
