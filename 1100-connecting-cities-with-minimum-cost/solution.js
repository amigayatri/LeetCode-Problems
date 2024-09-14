class UnionFind {
    constructor (size) {
        this.parents = Array.from({length: size}, (_, i) => i)
        this.n = size
    }

    find = (a) => {
        if (a === this.parents[a]) return a
        return this.parents[a] = this.find(this.parents[a])
    }

    union = (a, b) => {
        const rootA = this.find(a)
        const rootB = this.find(b)
        if (rootA !== rootB) {
            this.parents[rootA] = rootB
            this.n--
        }
    }
}
const minimumCost = function(N, connections) {
    connections.sort((a, b) => a[2]-b[2])
    const uf = new UnionFind(N)
    let res = 0
    for (const [a, b, cost] of connections) {
        const rootA = uf.find(a)
        const rootB = uf.find(b)
        if (rootA !== rootB) {
            res += cost
            uf.union(a, b)
        }
    }
    return uf.n === 1? res : -1
};
