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
var minDepth = function (root) {
    if (root == null) return 0
    let toVisit = new Queue([root])
    let depth = 1
    while (!toVisit.isEmpty()) {
        const lvlSz = toVisit.size()
        for (let i = 0; i < lvlSz; i++) {
            const node = toVisit.pop()
            if (node.left == null && node.right == null) {
                return depth
            }
            if (node.left !== null) toVisit.push(node.left)
            if (node.right !== null) toVisit.push(node.right)
        }
        depth++
    }
    return -1
}
