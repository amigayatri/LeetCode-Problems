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
var zigzagLevelOrder = function (root) {
    if (root === null) return []
    let levels = [], level = 0, leftToRight = true
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
        leftToRight = !leftToRight
    }
    return levels.map((l, i) => (i % 2 === 1)? l.reverse() : l)
}
