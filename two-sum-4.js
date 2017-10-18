/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

const findTarget = function(root, k) {

    const map = {};
    return findNode(root, k, map) ? true : false;
};

const findNode = function (node, target, map) {

    if (node === null) return;
    if (map[target - node.val] !== undefined) {
      return true;
    } else {
      map[node.val] = target - node.val;
    }

    return findNode(node.left, target, map) || findNode(node.right, target, map);
};
