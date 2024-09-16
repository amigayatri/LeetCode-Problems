/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {_Node} root
 * @return {number}
 */
var diameter = function (root) {
    let maxDistance = 0
    const maxDepth = (node, currDepth) => {
        if (node.children.length == 0) return currDepth
        let maxDepth1 = currDepth, maxDepth2 = 0
        for (const child of node.children) {
            const depth = maxDepth(child, currDepth + 1)
            if (depth > maxDepth1) {
                maxDepth2 = maxDepth1
                maxDepth1 = depth
            } else if (depth > maxDepth2) {
                maxDepth2 = depth
            }
        }
        const distance = maxDepth1 + maxDepth2 - 2 * currDepth
        if (distance > maxDistance) maxDistance = distance
        return maxDepth1
    }
    maxDepth(root, 0)
    return maxDistance
};
