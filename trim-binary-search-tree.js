/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */

const trimBST = function(root, L, R) {

    const node = root;

    if (node === null) return node;

    if (node.val < L) {
        return trimBST(node.right, L, R);
    }

    if (node.val > R) {
        return trimBST(node.left, L, R);
    }

    node.left = trimBST(node.left, L, R);
    node.right = trimBST(node.right, L, R);

    return node;
};
