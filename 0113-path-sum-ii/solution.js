const pathSum = (root, targetSum) => {
    if (root == null) return []
    let res = [], path = []
    const checkRootToLeaf = (node, currSum, res, path) => {
        if (node == null) return currSum == 0
        path.push(node.val)
        if (currSum == node.val && node.left == null && node.right == null) {
            res.push(Array.from(path))
        } else {
            checkRootToLeaf(node.left, currSum-node.val, res, path)
            checkRootToLeaf(node.right, currSum-node.val, res, path)
        }
        path.pop()
    }
    checkRootToLeaf(root, targetSum, res, path)
    return res
};
