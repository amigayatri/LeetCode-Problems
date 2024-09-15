/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {_Node|null} node
 * @return {_Node|null}
 */
var cloneTree = function(root) {
    const clone = (node = root) => {
        if (node == null) return null
        const cpy = new Node(node.val, [])
        for (const child of node.children) {
            cpy.children.push(clone(child))
        }
        return cpy
    }
    return clone()
};
