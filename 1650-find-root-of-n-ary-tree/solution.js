var findRoot = function(tree) {
    let singleValue = 0
    for (const node of tree) {
        singleValue ^= node.val
        for(const child of node.children) {
            singleValue ^= child.val
        }
    }
    for (const node of tree) {
        if (node.val == singleValue) return node
    }
};
