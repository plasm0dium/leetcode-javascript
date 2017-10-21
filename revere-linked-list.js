/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseList = function(head) {

  let reverveList = null;
  let currentNode = head;
  while (currentNode) {
    const temp = currentNode.next;
    currentNode.next = reverveList;
    reverveList = currentNode;
    currentNode = temp;
  }

  return reverveList;
};
