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
var getMinimumDifference = function (root) {
    let minDiff = Number.MAX_SAFE_INTEGER
    let prevNode = null
    const inorderTraversal = (node) => {
        if (node === null) return
        inorderTraversal(node.left)
        if (prevNode != null) {
            const localDiff = node.val - prevNode.val
            if (localDiff < minDiff) {
                minDiff = localDiff
            }
        }
        prevNode = node
        inorderTraversal(node.right)
    }
    inorderTraversal(root)

    return minDiff
};
