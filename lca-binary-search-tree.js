/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

const lowestCommonAncestor = function(root, p, q) {

    if ((root.val - p.val) * (root.val - q.val) > 0) {
        return lowestCommonAncestor(p.val < root.val ? root.left : root.right, p, q);
    }
    return root;
};
