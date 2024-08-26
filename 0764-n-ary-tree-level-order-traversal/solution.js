/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = []
    let toVisit = new Queue()
    if (root != null) toVisit.push(root)
    while (!toVisit.isEmpty()){
        let level = []
        const sz = toVisit.size()
        for (let i = 0; i < sz; i++) {
            const node = toVisit.pop()
            for (let child of node.children) {
                toVisit.push(child)
            }
            level.push(node.val)
        }
        res.push(level)
    }
    return res
};
