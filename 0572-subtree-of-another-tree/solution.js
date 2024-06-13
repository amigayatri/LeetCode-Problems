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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    const isSameTree = (p, q) => {
        if(!p && !q) return true
        if (!p || !q) return false
        if (p.val !== q.val) return false
        let left = isSameTree(p.left, q.left)
        if (!left) return false
        let right = isSameTree(p.right, q.right)
        if (!right) return false
        return true
    }
    const isSubtreeHelper = (treeNode, subRoot) => {
        if (!treeNode && subRoot) return false
        if (treeNode.val == subRoot.val && isSameTree(treeNode.left, subRoot.left) && isSameTree(treeNode.right, subRoot.right)) return true
        return (isSubtreeHelper(treeNode.left, subRoot) || isSubtreeHelper(treeNode.right, subRoot))
    }
    if (!root && !subRoot) return true
    if(!root || !subRoot) return false
    return isSubtreeHelper(root, subRoot)
};
