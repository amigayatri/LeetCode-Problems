class UnionFind {
    constructor (size) {
        this.group = Array.from({length: size}, (_, i) => i)
        this.rank = Array.from({length: size}, () => 0)
    }

    find = (a) => {
        if (a === this.group[a]) return a
        return this.group[a] = this.find(this.group[a])
    }

    union = (a, b) => {
        const groupA = this.find(a)
        const groupB = this.find(b)
        if (groupA === groupB) return false
        if (this.rank[groupA] > this.rank[groupB]) {
            this.group[groupB] = groupA
        } else if (this.rank[groupA] < this.rank[groupB]) {
            this.group[groupA] = groupB
        } else {
            this.group[groupA] = groupB
            this.rank[groupB]++
        }
        return true
    }
}
var minCostToSupplyWater = function(n, wells, pipes) {
    const orderedEdges = []
    for (let i = 0; i < wells.length; i++) {
        orderedEdges.push([0, i+1, wells[i]])
    }
    orderedEdges.push(...pipes)
    orderedEdges.sort((a, b) => a[2]-b[2])
    const uf = new UnionFind(n)
    let totalCost = 0
    for (const [house1, house2, cost] of orderedEdges) {
        if (uf.union(house1, house2)) {
            totalCost += cost
        }
    }
    return totalCost
};
