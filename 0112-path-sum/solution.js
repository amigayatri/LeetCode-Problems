var hasPathSum = function(root, targetSum) {
    if (root === null) return false
    let nodeStack = []
    let sumStack = []
    const addToStacks = (node, val) => {
        nodeStack.push(node)
        sumStack.push(val)
    }
    nodeStack.push(root)
    sumStack.push(targetSum - root.val)
    while (nodeStack.length > 0) {
        const currNode = nodeStack.pop()
        const currSum = sumStack.pop()
        if(!currNode.left && !currNode.right && currSum === 0) return true
        if (currNode.right) addToStacks(currNode.right, currSum - currNode.right.val)
        if (currNode.left) addToStacks(currNode.left, currSum - currNode.left.val)
    }
    return false
};
