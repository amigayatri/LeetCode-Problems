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
var maximumAverageSubtree = function(root) {
    let maxAverage = 0
    const dfs = (node = root) => {
        if (node == null) return {sum: 0, count: 0}
        const left = dfs(node.left)
        const right = dfs(node.right)
        const count = left.count + right.count + 1
        const sum = left.sum + right.sum + node.val
        const average = sum/count
        if (average > maxAverage) maxAverage = average
        return {sum, count}
    }
    dfs()
    return maxAverage
};
