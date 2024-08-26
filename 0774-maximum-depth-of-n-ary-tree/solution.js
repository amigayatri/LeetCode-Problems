/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    let maxDepth = 0
    const dfsN = (node = root, depth = 1) => {
        if (node == null) return
        if (node.children.length == 0) {
            if (depth > maxDepth) maxDepth = depth
            return
        }
        for (let child of node.children) {
            dfsN(child, depth+1)
        }
    }
    dfsN()
    return maxDepth
};
