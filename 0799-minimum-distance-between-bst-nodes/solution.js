var minDiffInBST = function(root) {
    let minDiff = Number.MAX_SAFE_INTEGER
    let prevNode = null
    const inorderTraversal = (node) => {
        if (node === null) return
        inorderTraversal(node.left)
        if (prevNode != null) {
            const localDiff = node.val - prevNode.val
            if (localDiff < minDiff) {
                minDiff = localDiff
            }
        }
        prevNode = node
        inorderTraversal(node.right)
    }
    inorderTraversal(root)

    return minDiff
};
