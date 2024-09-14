/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */

class UnionFind {
    constructor (n) {
        this.parent = Array.from({length: n}, (_, i) => i)
        this.size = Array.from({length: n}, () => 1)
    }

    find = (a) => {
        let root = a
        while (this.parent[root] != root) {
            root = this.parent[root]
        }
        while(a != root) {
            const oldRoot = this.parent[a]
            this.parent[a] = root
            a = root
        }
        return root
    }

    union = (a, b) => {
        const rootA = this.find(a)
        const rootB = this.find(b)
        if (rootA == rootB) return false
        if (this.size[rootA] < this.size[rootB]) {
            this.parent[rootA] = rootB
            this.size[rootB] += this.size[rootA]
        } else {
            this.parent[rootB] = rootA
            this.size[rootA] += this.size[rootB]
        }
        return true
    }
}
var validTree = function(n, edges) {
    if (edges.length !== n-1) return false
    const unionFind = new UnionFind(n)
    for (const [a, b] of edges) {
        if (!unionFind.union(a, b)) return false
    }
    return true
};
