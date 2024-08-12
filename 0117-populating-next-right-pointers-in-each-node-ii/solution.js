
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
    if (root === null) return root
    const processChild = (childnode, prev, leftmost) => {
        if (childnode !== null) {
            if (prev !== null) {
                prev.next = childnode
            } else {
                leftmost = childnode
            }
            prev = childnode
        }
        return { prev, leftmost }
    }
    let leftmost = root, prev = null, curr = null
    while (leftmost !== null) {
        prev = null
        curr = leftmost
        leftmost = null
        while (curr !== null) {
            const lChild = processChild(curr.left, prev, leftmost);
            ({ prev, leftmost } = lChild)
            const rChild = processChild(curr.right, prev, leftmost);
            ({ prev, leftmost } = rChild)
            curr = curr.next
        }
    }
    return root
};
