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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) return []
    let levels = [], level = 0
    let thisLevel = new Queue([root])
    while (!thisLevel.isEmpty()) {
        levels[level] = []
        const levelLength = thisLevel.size()
        for (let i = 0; i < levelLength; i++) {
            const node = thisLevel.pop()
            levels[level][i] = node.val
            if (node.left !== null) thisLevel.push(node.left)
            if (node.right !== null) thisLevel.push(node.right)
        }
        level++
    }
    return levels
};
