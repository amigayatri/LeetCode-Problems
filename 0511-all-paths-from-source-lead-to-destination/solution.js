const leadsToDestination = function(n, edges, source, destination) {
    const graph = {}, memo = {}
    for (const [from, to] of edges) {
        const mapped = graph[from]
        if (mapped !== undefined) {
            mapped.push(to)
        } else {
            graph[from] = [to]
        }
    }
    if (graph[destination] !== undefined) return false
    const backtrack = (currNode, path) => {
        if (memo[currNode] !== undefined) return memo[currNode]
        const neighbours = graph[currNode]
        if (neighbours === undefined) {
            return currNode === destination
        }
        for (const node of neighbours) {
            if (path.has(node)) return false
            path.add(node)
            const validPath = backtrack(node, path)
            memo[currNode] = validPath
            if (!validPath) return false
            path.delete(node)
        }
        memo[currNode] = true
        return true
    }
    return backtrack(source, new Set([source]))
};
