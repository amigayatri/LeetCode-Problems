class UnionFind {
    constructor (size) {
        this.parent = Array.from({length: size}, (_, i) => i)
        this.rank = Array.from({length: size}, () => 0)
    }

    find = (x) => {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x])
        }
        return this.parent[x]
    }

    unionSet = (x, y) => {
        const xSet = this.find(x), ySet = this.find(y)
        if (xSet == ySet) {
            return
        } else if (this.rank[xSet] < this.rank[ySet]) {
            this.parent[xSet] = ySet
        } else if (this.rank[xSet] > this.rank[ySet]) {
            this.parent[ySet] = xSet
        } else {
            this.parent[ySet] = xSet
            this.rank[xSet]++
        }
    }
}
var numSimilarGroups = function(strs) {
    const n = strs.length
    const dsu = new UnionFind(n)
    const isSimilar = (a, b) => {
        let diff = 0
        const sz = a.length
        for(let i = 0; i < sz; i++) {
            if(a.charAt(i) !== b.charAt(i)) diff++
        }
        return diff == 0 || diff == 2
    }
    let count = n
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            if(isSimilar(strs[i], strs[j]) && dsu.find(i) !== dsu.find(j)) {
                count--
                dsu.unionSet(i, j)
            }
        }
    }
    return count
};
