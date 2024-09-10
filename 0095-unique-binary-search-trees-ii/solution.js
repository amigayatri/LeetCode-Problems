/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    let dp = Array.from({length: n+1}, () => [])
    dp[0].push(null)
    const clone = (node, offset) => {
        if (node == null) {
            return null
        }
        let clonedNode = new TreeNode(node.val+offset)
        clonedNode.left = clone(node.left, offset)
        clonedNode.right = clone(node.right, offset)
        return clonedNode
    }
    for (let numberOfNodes = 1; numberOfNodes <= n; numberOfNodes++) {
        for (let i = 1; i <= numberOfNodes; i++) {
            const j = numberOfNodes-i
            dp[i-1].forEach((left) => {
                dp[j].forEach((right) => {
                    const root = new TreeNode(i, left, clone(right, i))
                    dp[numberOfNodes].push(root)
                })
            })
        }
    }
    return dp[n]
};
