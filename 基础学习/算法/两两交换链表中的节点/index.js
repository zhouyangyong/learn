var swapPairs = function (head) {
  if (head == null || head.next == null) {
    return head;
  }

  // 获取第二个节点
  let nxt = head.next;
  // 第一个节点指向第三个节点，并从第三个节点开始递归
  head.next = swapPairs(nxt.next);
  // 第二个节点指向第一个节点
  nxt.next = head;
  console.log('nxt', nxt);
  return nxt;
};
