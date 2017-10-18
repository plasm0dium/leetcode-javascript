/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const averageOfLevels = function (root) {

    let sum = [];
    let count = [];
    average(root, 0, sum, count);

    for (let i = 0; i < count.length; i++) {
      sum[i] /= count[i];
    }

    return sum;
};

const average = (root, level, sum, count) => {
    if (root === null) return;
    if (sum[level] === undefined) {
        sum[level] = root.val;
        count[level] = 1;
    } else {
        sum[level] += root.val;
        count[level] = count[level] + 1;
    }

    average(root.left, level + 1, sum, count);
    average(root.right, level + 1, sum, count);
};
