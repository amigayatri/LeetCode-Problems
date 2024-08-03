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
var sumNumbers = function(node) {
    let totalSum = 0, currNum = 0, steps
    let pred
    while (node != null) {
        if (node.left != null) {
            pred = node.left
            steps = 1
            while (pred.right != null && pred.right != node) {
                pred = pred.right
                steps++
            }
            if (pred.right == null) {
                currNum = currNum*10+node.val
                pred.right = node
                node = node.left
            } else {
                if (pred.left == null) {
                    totalSum += currNum
                }
                for (let i = 0; i < steps; i++) {
                    currNum = Math.floor(currNum/10)
                }
                pred.right = null
                node = node.right
            }
        } else {
            currNum = currNum*10+node.val
            if (node.right == null) {
                totalSum += currNum
            }
            node = node.right
        }
    }
    return totalSum
};
