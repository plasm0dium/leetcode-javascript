/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const invertTree = function(root) {

  if (!root) return null;

  const queue = [root];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    const temp = currentNode.left;
    currentNode.left = currentNode.right;
    currentNode.right = temp;
    if (currentNode.left !== null) queue.push(currentNode.left);
    if (currentNode.right !== null) queue.push(currentNode.right);
  }

  return root;
};
