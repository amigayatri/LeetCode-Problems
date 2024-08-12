/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var buildTree = function(inorder, postorder) {
    const n = inorder.length
    let inIdxMap = new Map(inorder.map((v, i) => [v, i]))
    let posIdx = n-1
    const arrToTree = (left = 0, right = n-1) => {
        if (left > right) return null
        const rootValue = postorder[posIdx]
        posIdx--
        const root = new TreeNode(rootValue)
        const inIdx = inIdxMap.get(rootValue)
        root.right = arrToTree(inIdx+1, right)
        root.left = arrToTree(left, inIdx-1)
        return root
    }
    return arrToTree()
};

