// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

var reverseList = function (head) {
  if (!head) return null;
  let pre = null,
    cur = head;
  while (cur) {
    //保存next
    let next = cur.next;
    //替换next
    cur.next = pre;
    //设置pre的值
    pre = cur;
    //设置当前项的值
    cur = next;
  }
  return pre;
};
