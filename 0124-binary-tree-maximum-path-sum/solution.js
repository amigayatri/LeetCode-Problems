/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
    let maxSum = Number.MIN_SAFE_INTEGER
    const gainFromSubtree = (node = root) => {
        if (node == null) return 0
        const gainLeft = Math.max(gainFromSubtree(node.left), 0)
        const gainRight = Math.max(gainFromSubtree(node.right), 0)
        const asRoot = node.val + gainLeft+gainRight
        if (asRoot > maxSum) maxSum = asRoot
        const withBest = Math.max(gainLeft, gainRight) + node.val
        return withBest
    }
    gainFromSubtree()
    return maxSum
};
