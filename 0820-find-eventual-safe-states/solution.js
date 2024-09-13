/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    const n = graph.length
    const visit = Array.from({length: n}, () => false)
    const inStack = Array.from({length: n}, () => false)
    const dfs = (node) => {
        if (inStack[node]) return true
        if (visit[node]) return false
        visit[node] = true
        inStack[node] = true
        for (const neighbor of graph[node]) {
            if (dfs(neighbor)) {
                return true
            }
        }
        inStack[node] = false
        return false
    }
    for (let i = 0; i < n; i++) {
        dfs(i)
    }
    const safeNodes = []
    for (let i = 0; i < n; i++) {
        if(!inStack[i]) safeNodes.push(i)
    }
    return safeNodes
};
