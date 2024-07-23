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
var isSymmetric = function(root) {
    let q = [root, root]
    while (q.length > 0) {
        let t1 = q.shift()
        let t2 = q.shift()
        if (t1 === null && t2 === null) continue
        if (t1 === null || t2 === null) return false
        if (t1.val !== t2.val) return false
        q.push(t1.left, t2.right, t1.right, t2.left)
    }
    return true
};
