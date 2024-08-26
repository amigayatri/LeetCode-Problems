/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let res = []
    const dfsN = (node = root) => {
        if (node == null) return
        for (let child of node.children) {
            dfsN(child)
        }
        res.push(node.val)
    }
    dfsN()
    return res
};
