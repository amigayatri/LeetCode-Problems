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
 * @return {number[]}
 */
var boundaryOfBinaryTree = function(root) {
    if (root == null) return []
    const isLeaf = node => node.left == null && node.right == null
    const res = []
    const addLeaves = (node) => {
        if(isLeaf(node)) {
            res.push(node.val)
        } else {
            if (node.left != null) addLeaves(node.left)
            if (node.right != null) addLeaves(node.right)
        }
    }
    const getLeftBoundary = (node) => {
        while (node != null) {
            if (!isLeaf(node)) {
                res.push(node.val)
            }
            if(node.left != null) {
                node = node.left
            } else {
                node = node.right
            }
        }
    }
    const getRightBoundary = (node) => {
        const stack = []
        while (node !== null) {
            if (!isLeaf(node)) {
                stack.push(node.val)
            }
            if (node.right !== null) {
                node = node.right
            } else {
                node = node.left
            }
        }
        while (stack.length > 0) {
            res.push(stack.pop())
        }
    }
    if (!isLeaf(root)) res.push(root.val)
    getLeftBoundary(root.left)
    addLeaves(root)
    getRightBoundary(root.right)
    return res
};
