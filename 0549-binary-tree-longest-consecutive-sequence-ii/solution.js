const longestConsecutive = function(root) {
    let maxVal = 0
    const longestPath = (node = root) => {
        if (node == null) return [0, 0]
        let inr = 1, dcr = 1
        if (node.left !== null) {
            let [leftInr, leftDcr] = longestPath(node.left)
            if (node.val === node.left.val+1) {
                dcr = leftDcr+1
            } else if (node.val === node.left.val-1) {
                inr = leftInr+1
            }
        }
        if (node.right !== null) {
            let [rightInr, rightDcr] = longestPath(node.right)
            if (node.val === node.right.val+1) {
                dcr = Math.max(rightDcr+1, dcr)
            } else if (node.val === node.right.val-1) {
                inr = Math.max(rightInr+1, inr)
            }
        }
        maxVal = Math.max(maxVal, dcr+inr-1)
        return [inr, dcr]
    }
    longestPath()
    return maxVal
};
