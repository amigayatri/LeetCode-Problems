var lowestCommonAncestor = function (root, p, q) {
    let nodesFound = false
    const dfs = (node) => {
        if (!node) return node
        let left = dfs(node.left)
        let right = dfs(node.right)
        let conditions = 0
        if (node == p || node == q) conditions++
        if (left) conditions++
        if (right) conditions++
        if (conditions == 2) nodesFound = true
        if (left && right || node == p || node == q) return node
        return left || right
    }
    let ans = dfs(root, p, q)
    return nodesFound ? ans : null
}
