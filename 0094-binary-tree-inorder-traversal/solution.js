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
var inorderTraversal = function (root) {
    if (root == null) return []
    let trav = [], toVisit = []
    let node = root
    while (node !== null || toVisit.length > 0) {
        while (node !== null) {
            toVisit.push(node)
            node = node.left
        }
        node = toVisit.pop()
        trav.push(node.val)
        node = node.right
    }
    return trav
};
