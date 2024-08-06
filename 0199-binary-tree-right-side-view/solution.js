var rightSideView = function (root) {
    if (root == null) return []
    let queue = [], rightSide = []
    let prev, curr = root
    queue.push(root)
    queue.push(null)
    while (queue.length > 0) {
        prev = curr
        curr = queue.shift()
        while (curr != null) {
            if (curr.left != null) queue.push(curr.left)
            if (curr.right != null) queue.push(curr.right)
            prev = curr
            curr = queue.shift()
        }
        rightSide.push(prev.val)
        if (queue.length > 0) queue.push(null)
    }
    return rightSide
};
