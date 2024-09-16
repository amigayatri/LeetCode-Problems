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
var longestConsecutive = function(root) {
    let maxLength = 0
    const dfs = (node) => {
        if (node == null) return 0
        let left = dfs(node.left) + 1
        let right = dfs(node.right) + 1
        if (node.left !== null && node.val+1 !== node.left.val) {
            left = 1
        }
        if (node.right !== null && node.val+1 !== node.right.val) {
            right = 1
        }
        const length = Math.max(left, right)
        maxLength = Math.max(maxLength, length)
        return length
    }
    dfs(root)
    return maxLength
};
