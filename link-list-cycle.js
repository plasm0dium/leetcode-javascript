/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

const hasCycle = function (head) {

    if (!head || !head.next) return false;

    let slow = head;
    let fast = head.next;

    while (slow !== null && fast !== null) {
        if (slow === fast) return true;
        if (!fast || !fast.next) return false;
        slow = slow.next;
        fast = fast.next.next;
    }

    return false;
};
