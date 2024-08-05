var pathSum = function(root, targetSum) {
    if (root == null) return 0
    let map = new Map()
    let count = 0
    const preorder = (node, currSum=0) => {
        if (node == null) return
        currSum += node.val
        if (currSum == targetSum) count++
        if (map.has(currSum-targetSum)) count += map.get(currSum-targetSum)
        map.set(currSum, map.has(currSum) ? map.get(currSum)+1 : 1)
        preorder(node.left, currSum)
        preorder(node.right, currSum)
        map.set(currSum, map.get(currSum)-1)
    }
    preorder(root)
    return count
};
