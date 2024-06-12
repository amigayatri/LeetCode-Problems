/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const isSameTreeHelper = (p, q) => {
        if(!p && !q) return true
        if (!p || !q) return false
        if (p.val !== q.val) return false
        let left = isSameTreeHelper(p.left, q.left)
        if (!left) return false
        let right = isSameTreeHelper(p.right, q.right)
        if (!right) return false
        return true
    }
    return isSameTreeHelper(p, q)
};
