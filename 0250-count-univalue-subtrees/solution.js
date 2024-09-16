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
var countUnivalSubtrees = function(root) {
    const dfs = (node) => {
        if (node == null) return {sameVal: true, count: 0}
        const left = dfs(node.left)
        const right = dfs(node.right)
        const count = left.count + right.count
        if (left.sameVal && right.sameVal) {
            if (node.left != null && node.left.val != node.val) {
                return {sameVal: false, count}
            }
            if (node.right != null && node.right.val != node.val) {
                return {sameVal: false, count}
            }
            return {sameVal: true, count: count+1}
        }
        return {sameVal: false, count}
    }
    return dfs(root).count
};
