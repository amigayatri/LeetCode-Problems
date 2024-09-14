/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
    class Graph {
        constructor() {
            this.graph = new Map()
            this.visited = new Set()
            this.initializeGraph()
        }

        initializeGraph = () => {
            const setParent = (currNodeVal, parentNodeVal) => {
                !this.graph.has(currNodeVal) && this.graph.set(currNodeVal, [])
                !this.graph.has(parentNodeVal) && this.graph.set(parentNodeVal, [])
                this.graph.get(currNodeVal).push(parentNodeVal)
                this.graph.get(parentNodeVal).push(currNodeVal)

            }
            const buildGraph = (currNode, parentNode) => {
                if (currNode !== null && parentNode !== null) {
                    setParent(currNode.val, parentNode.val)
                }
                if (currNode.left !== null) {
                    buildGraph(currNode.left, currNode)
                }
                if (currNode.right !== null) {
                    buildGraph(currNode.right, currNode)
                }
            }
            buildGraph(root, null)
        }

        findK = (targetVal) => {
            const answer = []
            this.visited.add(targetVal)
            const dfs = (currNodeVal, distance) => {
                if (distance == k) {
                    answer.push(currNodeVal)
                    return
                }
                if (this.graph.has(currNodeVal)) {
                    const neighbors = this.graph.get(currNodeVal)
                    for (const neighbor of neighbors) {
                        if (!this.visited.has(neighbor)) {
                            this.visited.add(neighbor)
                            dfs(neighbor, distance + 1)
                        }
                    }
                }
            }
            dfs(targetVal, 0)
            return answer
        }

    }
    const graph = new Graph()
    return graph.findK(target.val)
};
