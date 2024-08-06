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
var maxLevelSum = function(root) {
    let levelSum = [root.val]
    const sumNodes = (node, h) => {
        if (node == null) return
        if (levelSum[h-1] == undefined) levelSum.push(0)
        levelSum[h-1] += node.val
        sumNodes(node.left, h+1)
        sumNodes(node.right, h+1)
    }    
    sumNodes(root, 1)
    let iMax = 0
    for (let i = 0; i < levelSum.length; i++) {
        if (levelSum[iMax] < levelSum[i]) iMax = i
    }
    return iMax+1
};
