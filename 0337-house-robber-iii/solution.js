/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    if (root == null) return 0
    const tree = new Array()
    const graph = new Map()
    graph.set(-1, new Array())
    let idx = -1
    const queue = new Queue()
    queue.push({node: root, parentIdx: idx})
    while (!queue.isEmpty()) {
        const {node, parentIdx} = queue.pop()
        if (node !== null) {
            idx++
            tree.push(node.val)
            graph.set(idx, new Array())
            graph.get(parentIdx).push(idx)
            queue.push({node: node.left, parentIdx: idx})
            queue.push({node: node.right, parentIdx: idx})
        }
    }
    const dpRob = new Array(idx+1), dpNotRob = new Array(idx+1)
    for (let i = idx; i >= 0; i--) {
        const children = graph.get(i)
        dpRob[i] = tree[i]
        dpNotRob[i] = 0
        if (children != null && children.length > 0) {
            for (let childIdx of children) {
                dpRob[i] += dpNotRob[childIdx]
                dpNotRob[i] += Math.max(dpRob[childIdx], dpNotRob[childIdx])
            }
        }
    }
    return Math.max(dpRob[0], dpNotRob[0])
};
