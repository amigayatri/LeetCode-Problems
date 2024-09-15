var findLeaves = function(root) {
    let res = []
    const pushValuesByHeight = (node = root) => {
        if (node == null) return -1
        const leftHeight = pushValuesByHeight(node.left)
        const rightHeight = pushValuesByHeight(node.right)
        const currHeight = Math.max(leftHeight, rightHeight) + 1
        if (res.length == currHeight) res.push([])
        res[currHeight].push(node.val)
        return currHeight
    }
    pushValuesByHeight()
    return res
};
