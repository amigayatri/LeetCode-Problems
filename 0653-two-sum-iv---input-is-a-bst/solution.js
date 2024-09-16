const findTarget = function (root, k) {
    const nodes = new Map()
    const dfs = (node) => {
        if (node == null) return
        dfs(node.left)
        nodes.set(node.val, (nodes.get(node.val) || 0)+1)
        dfs(node.right)
    }
    dfs(root)
    for (const [num, count] of nodes) {
        if (num*2 == k) {
            if (count >= 2) return true
            return false
        } else if (nodes.has(k - num)) {
            return true
        }
    }
    return false
};
