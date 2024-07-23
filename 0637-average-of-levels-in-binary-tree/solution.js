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
var averageOfLevels = function(root) {
    let nodeByDepth = []
    const addToArray = (node, depth = 0) => {
        if (node == null) return
        if (nodeByDepth[depth] == undefined) nodeByDepth[depth] = {sum: 0, qtty: 0}
        nodeByDepth[depth].sum += node.val
        nodeByDepth[depth].qtty++
        addToArray(node.left, depth+1)
        addToArray(node.right, depth+1)
    }
    addToArray(root)
    const depth = nodeByDepth.length
    for (let i = 0; i < depth; i++) {
        nodeByDepth[i] = nodeByDepth[i].sum/nodeByDepth[i].qtty
    }
    return nodeByDepth
};
