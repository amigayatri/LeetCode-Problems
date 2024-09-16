/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @param {number} target
 * @return {boolean}
 */
var twoSumBSTs = function(root1, root2, target) {
    const createTreeSet = (root) => {
        const nodes = new Set()
        const dfs = (node) => {
            if (node == null) return
            dfs(node.left)
            nodes.add(node.val)
            dfs(node.right)
        }
        dfs(root)
        return nodes
    }
    const nodes1 = createTreeSet(root1)
    const nodes2 = createTreeSet(root2)
    for (const num of nodes1) {
        if (nodes2.has(target-num)) return true
    }
    return false
};
