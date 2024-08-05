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
var longestZigZag = function(root) {
    let pathLength = 0
    const maxZigZag = (node, left, right) => {
        if (node == null) return
        pathLength = Math.max(pathLength, left, right)
        if (node.left !== null) {
            maxZigZag(node.left, right+1, 0)
        }
        if (node.right != null) {
            maxZigZag(node.right, 0, left+1)
        }
    }
    maxZigZag(root, 0, 0)
    return pathLength
};
