class ColoredGraph {
    constructor(n, colors) {
        this.count = Array.from({ length: n }, () => Array.from({ length: 26 }, () => 0))
        this.visit = Array.from({ length: n }, () => false)
        this.inStack = Array.from({ length: n }, () => false)
        this.adj = new Map()
        this.colorByIdx = new Map(colors.split('').map((color, i) => [i, color.charCodeAt(0)-'a'.charCodeAt(0)]))
    }

    addEdge = (from, to) => {
        !this.adj.has(from) && this.adj.set(from, new Set())
        this.adj.get(from).add(to)
    }

    getColor = (idx) => {
        return this.colorByIdx.get(idx)
    }

    getCount = (node, color) => {
        return this.count[node][color]
    }

    updateCount = (node, color, newVal) => {
        this.count[node][color] = newVal
    }

    updateAllCounts = (node, neighbor) => {
        for (let i = 0; i < 26; i++) {
            this.updateCount(node, i, Math.max(this.count[node][i], this.count[neighbor][i]))
        }
    }

    dfs (node) {
        if(this.inStack[node]) return Number.MAX_VALUE
        if(this.visit[node]) {
            const color = this.getColor(node)
            return this.count[node][color]
        }
        this.visit[node] = true
        this.inStack[node] = true
        if (this.adj.has(node)) {
            for (const neighbor of this.adj.get(node)) {
                if(this.dfs(neighbor) == Number.MAX_VALUE) {
                    return Number.MAX_VALUE
                }
                this.updateAllCounts(node, neighbor)
            }
        }
        const color = this.getColor(node)
        this.updateCount(node, color, this.getCount(node, color)+1)
        this.inStack[node] = false
        return this.getCount(node, color)
    }

    maxCount = () => {
        let answer = 0
        const n = this.visit.length
        for(let i = 0; i < n; i++) {
            answer = Math.max(answer, this.dfs(i))
        }
        return answer == Number.MAX_VALUE ? -1 : answer
    }
}
var largestPathValue = function (colors, edges) {
    const n = colors.length
    const graph = new ColoredGraph(n, colors)
    for (const [from, to] of edges) {
        graph.addEdge(from, to)
    }
    return graph.maxCount()
};
