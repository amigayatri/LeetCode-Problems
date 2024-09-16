const closestKValues = function(root, target, k) {
    let queue = new Queue()
    const targetDiff = (val) => {
        return Math.abs(target-val)
    }
    const dfs = (node) => {
        if (node === null) return
        dfs(node.left)
        queue.push(node.val)
        if (queue.size() > k) {
            if (targetDiff(queue.front()) <= targetDiff(queue.back())) {
                return
            } else {
                queue.pop()
            }
        }
        dfs(node.right)
        return
    }
    dfs(root)
    const ans = queue.toArray()
    while (ans.length > k) ans.pop()
    ans.reverse()
    return ans
};
