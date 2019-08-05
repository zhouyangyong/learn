function ListNode(val) {
  this.val = val;
  this.next = null;
}

var reverseList = function (head) {
  let cur = head,
      pre = null;
  while(cur) {
    let t = cur.next;
    cur.next = pre;
    pre = cur;
    cur = t;
  }
  return pre
};

let a1 = new ListNode(1);
let a2 = new ListNode(2);
let a3 = new ListNode(3);
let a4 = new ListNode(4);
let a5 = new ListNode(5);
let a6 = new ListNode(null);
a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;

console.log(reverseList(a1))