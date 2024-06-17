/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    let visited = new Map()
    function dfs (node) {
        if (node == null) return node
        if (visited.has(node)) return visited.get(node)
        let cloneNode = new Node(node.val, [])
        visited.set(node, cloneNode)
        node.neighbors.forEach(function (neighbor) {
            cloneNode.neighbors.push(dfs(neighbor))
        })
        return cloneNode
    }
    return dfs(node)
};
