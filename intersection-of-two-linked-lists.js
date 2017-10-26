/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// O(mn)

const getIntersectionNode = function(headA, headB) {

    const queueA = [];
    const queueB = [];
    let intersectNode = null;

    while (headA) {
        const temp = headA.next;
        queueA.push(headA);
        headA = temp;
    }

    while (headB) {
        const temp = headB.next;
        queueB.push(headB);
        headB = temp;
    }

    while (queueA.length > 0 || queueB.length > 0) {
        const nodeA = queueA.pop();
        const nodeB = queueB.pop();

        if (nodeA === nodeB) intersectNode = nodeA;
    }

    return intersectNode;
};

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// Optimized solution O(m + n)

const getIntersectionNode = function(headA, headB) {

    if (headA === null || headB === null) return null;

    let nodeA = headA;
    let nodeB = headB;

    while (nodeA !== nodeB) {
        nodeA = nodeA === null ? headB : nodeA.next;
        nodeB = nodeB === null ? headA : nodeB.next;
    }

    return nodeB;
};
