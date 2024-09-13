/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const target = graph.length-1
    const memo = new Map()
    const allPathsToTarget = (currNode) => {
        if (memo.has(currNode)) {
            return memo.get(currNode)
        }
        const results = []
        if (currNode == target) {
            const path = []
            path.push(target)
            results.push(path)
            return results
        }
        for(const nextNode of graph[currNode]) {
            for (const path of allPathsToTarget(nextNode)) {
                const newPath = []
                newPath.push(currNode)
                newPath.push(...path)
                results.push(newPath)
            }
        }
        memo.set(currNode, results)
        return results
    }
    return allPathsToTarget(0)
};
