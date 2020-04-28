// 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
// 示例：
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4


// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
// Example:
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  let curList = new ListNode()
  const result = curList
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      curList.next = l1
      l1 = l1.next
    } else {
      curList.next = l2
      l2 = l2.next
    }
    curList = curList.next
  }
  if (l1 != null) {
    curList.next = l1
  }
  if (l2 != null) {
    curList.next = l2
  }
  return result.next
};

/**
 * 解题思路：
 * 1.定义一个空链表，
 * 2.保存链表的初始位置
 * 3.遍历L1、L2，哪个小就把哪个放到新的链表中，并且让该链表的指针前进一位
 * 4.如果L1、L2有剩余长度，直接赋值给新的链表即可
 */
