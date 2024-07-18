/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    const dfs = (node, leafList) => {
        if (node != null) {
            if (node.left === null && node.right === null) {
                leafList.push(node.val)
            }
            dfs(node.left, leafList)
            dfs(node.right, leafList)
        }

    }
    let leaves1 = [], leaves2 = []
    dfs(root1, leaves1)
    dfs(root2, leaves2)

    if (leaves1.length !== leaves2.length) return false
    const n = leaves1.length
    for (let i = 0; i < n; i++) {
        if(leaves1[i] != leaves2[i]) return false
    }
    return true
};
