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
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
    if (root == null) return root
    const absDiff = (val) => Math.abs(target - val)
    const dfs = (node = root) => {
        const val = node.val
        if (val == target) return val
        const child = target < val? node.left : node.right
        if (child == null) return val
        const childVal = dfs(child)
        const diff = absDiff(val)
        const childDiff = absDiff(childVal)
        if (diff == childDiff) return Math.min(childVal, val)
        return diff < childDiff ? val : childVal
    }
    return dfs()
};
