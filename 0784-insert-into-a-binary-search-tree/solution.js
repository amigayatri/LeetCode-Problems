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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (root === null) return new TreeNode(val)
    let curr = root
    while(curr !== null) {
        if (val > curr.val) {
            if (curr.right !== null) {
                curr = curr.right
            } else {
                curr.right = new TreeNode(val)
                return root
            }
        } else if (val < curr.val) {
            if (curr.left !== null) {
                curr = curr.left
            } else {
                curr.left = new TreeNode(val)
                return root
            }
        }
    }
};
