    const goodNodes = (node, maxInPath = Number.MIN_SAFE_INTEGER) => {
        if (node == null) return 0
        let shouldCount = 0
        if (node.val >= maxInPath) {
            shouldCount = 1
            maxInPath = node.val
        }
        return shouldCount + goodNodes(node.left, maxInPath) + goodNodes(node.right, maxInPath)
    }

