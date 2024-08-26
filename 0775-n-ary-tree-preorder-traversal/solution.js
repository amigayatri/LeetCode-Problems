/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    let res = []
    const dfsN = (node = root) => {
        if (node == null) return
        res.push(node.val)

        for (let child of node.children) {
            dfsN(child)
        }
    }
    dfsN()
    return res
};
