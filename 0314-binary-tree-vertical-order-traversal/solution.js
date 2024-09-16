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
var verticalOrder = function (root) {
    const output = []
    if (root == null) return output
    const columnTable = new Map()
    let minCol = 0, maxCol = 0
    const dfs = (node, row, col) => {
        if (node == null) return
        if (!columnTable.has(col)) columnTable.set(col, [])
        columnTable.get(col).push({row, val: node.val})
        if (col < minCol) minCol = col
        if (col > maxCol) maxCol = col
        dfs(node.left, row+1, col-1)
        dfs(node.right, row+1, col+1)
    }
    dfs(root, 0, 0)
    for (let i = minCol; i < maxCol+1; i++) {
        const sortedVals = columnTable.get(i).sort((a, b) => a.row - b.row).map((el) => el.val)
        output.push(sortedVals)
    }
    return output
};
