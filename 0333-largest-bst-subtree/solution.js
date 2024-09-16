class NodeValue {
    constructor (minNode, maxNode, maxSize) {
        this.maxNode = maxNode
        this.minNode = minNode
        this.maxSize = maxSize
    }
}
const largestBSTSubtreeHelper = (root) => {
    if (root == null) {
        return new NodeValue(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0)
    }
    const left = largestBSTSubtreeHelper(root.left)
    const right = largestBSTSubtreeHelper(root.right)
    if (left.maxNode < root.val && root.val < right.minNode) {
        return new NodeValue(Math.min(root.val, left.minNode), Math.max(root.val, right.maxNode), left.maxSize + right.maxSize + 1)
    }
    return new NodeValue(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Math.max(left.maxSize, right.maxSize))
}
const largestBSTSubtree = root => {
    return largestBSTSubtreeHelper(root).maxSize
};
