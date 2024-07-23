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
var countNodes = function (root) {
    if (root == null) return 0
    const depth = (root) => {
        let height = 0
        let aux = root
        while (aux.left !== null) {
            height++
            aux = aux.left
        }
        return height
    }
    const d = depth(root)
    if (d == 0) return 1
    const exists = (idx, d, node) => {
        let left = 0, right = Math.pow(2, d)-1
        for (let i = 0; i < d; i++) {
            const pivot = Math.floor((right+left)/2)
            if (idx <= pivot) {
                node = node.left
                right = pivot
            } else {
                node = node.right
                left = pivot+1
            }
        }
        return node != null
    }
    let left = 1, right = Math.pow(2, d) -1
    while (left <= right) {
        const pivot = Math.floor((left+right)/2)
        if (exists(pivot, d, root)) left = pivot + 1
        else right = pivot - 1
    }
    return Math.pow(2, d)-1 + left
};
