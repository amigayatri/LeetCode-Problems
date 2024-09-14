class Graph {
    constructor (n) {
        this.adj = new Map()
        this.stops = Array.from({length: n}, () => Number.MAX_VALUE)
        this.pq = new PriorityQueue({compare: (a, b) => a.dist-b.dist})
    }

    getAdjacents = (node) => {
        if(!this.adj.has(node)) return []
        return this.adj.get(node).values()
    }

    setEdge = (from, to, price) => {
        !this.adj.has(from) && this.adj.set(from, new Map())
        this.adj.get(from).set(to, {price, to})
    }

    findWay = (start, destination, maxStops) => {
        this.pq.enqueue({dist: 0, node: start, steps: 0})
        while (!this.pq.isEmpty()) {
            const {dist, node, steps} = this.pq.dequeue()
            if(steps > this.stops[node] || steps > maxStops+1) {
                continue
            }
            this.stops[node] = steps
            if (node == destination) return dist
            if (!this.adj.has(node)) continue
            for (const {price, to} of this.getAdjacents(node)){
                this.pq.enqueue({dist: dist+price, node: to, steps: steps+1})
            }
        }
        return -1
    }
}
var findCheapestPrice = function(n, flights, src, dst, k) {
    const graph = new Graph(n)
    for (const [from, to, price] of flights) {
        graph.setEdge(from, to, price)
    }
    return graph.findWay(src, dst, k)
};
