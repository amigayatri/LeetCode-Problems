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
 * @return {boolean}
 */
class TreeInfo {
    constructor(height, balanced) {
        this.height = height
        this.balanced = balanced
    }
}
var isBalanced = function(root) {
    const isBalancedHelper = (root) => {
        if (root == null) return new TreeInfo(-1, true)
        const left = isBalancedHelper(root.left)
        if (!left.balanced) return new TreeInfo(-1, false)
        const right = isBalancedHelper(root.right)
        if(!right.balanced) return new TreeInfo(-1, false)
        if (Math.abs(left.height - right.height) < 2) return new TreeInfo(Math.max(left.height, right.height)+1, true)
        return new TreeInfo(-1, false)
    }
    return isBalancedHelper(root).balanced
};
