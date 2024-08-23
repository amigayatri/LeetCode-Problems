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
var postorderTraversal = function(root) {
    let trav = []
    const dfs = (node = root) => {
        if (node == null) return
        dfs(node.left)
        dfs(node.right)
        trav.push(node.val)
    }
    dfs()
    return trav
};
