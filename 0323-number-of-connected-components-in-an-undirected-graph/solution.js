class Graph {
    constructor () {
        this.graph = new Map()
    }

    addEdge (from, to) {
        this.graph.set(from, (this.graph.get(from) || new Set()).add(to))
    }

    getNeighbors (nodeVal) {
        if (!this.graph.has(nodeVal)) return []
        return this.graph.get(nodeVal)
    }
}
const countComponents = function(n, edges) {
    if (n === 0) return 0
    const graph = new Graph(n)
    for (const [from, to] of edges) {
        graph.addEdge(from, to)
        graph.addEdge(to, from)
    }
    const seen = new Set()
    const dfs = (val) => {
        if (seen.has(val)) return
        seen.add(val)
        for (const neighbor of graph.getNeighbors(val)) {
            dfs(neighbor)
        }
        return
    }
    let count = 0
    for (let i = 0; i < n; i++) {
        if (!seen.has(i)) {
            count++
            dfs(i)
        }
    }
    return count
};
