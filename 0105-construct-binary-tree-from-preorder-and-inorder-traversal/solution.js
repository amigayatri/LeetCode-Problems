/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let inorderIndexMap = new Map(inorder.map((v, i) => [v, i]))
    let preIdx = 0
    const arrToTree = (left, right) => {
        if (left > right) return null
        const rootValue = preorder[preIdx]
        preIdx++
        const root = new TreeNode(rootValue)
        const inIdx = inorderIndexMap.get(rootValue)
        root.left = arrToTree(left, inIdx-1)
        root.right = arrToTree(inIdx+1, right)
        return root
    }
    return arrToTree(0, preorder.length-1)
};
