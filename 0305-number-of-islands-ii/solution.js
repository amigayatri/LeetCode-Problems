class UnionFind {
    constructor(size) {
        this.parent = Array.from({ length: size }, () => -1)
        this.rank = Array.from({ length: size }, () => 0)
        this.count = 0
    }

    addLand(x) {
        if (this.parent[x] >= 0) return
        this.parent[x] = x
        this.count++
    }

    isLand(x) {
        return this.parent[x] >= 0
    }

    numberOfIslands() {
        return this.count
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x])
        }
        return this.parent[x]
    }

    unionSet(x, y) {
        const xSet = this.find(x), ySet = this.find(y)
        if (xSet === ySet) {
            return
        } else if (this.rank[xSet] < this.rank[ySet]) {
            this.parent[xSet] = ySet
        } else if (this.rank[xSet] > this.rank[ySet]) {
            this.parent[ySet] = xSet
        } else {
            this.parent[ySet] = xSet
            this.rank[xSet]++
        }
        this.count--
    }
}
var numIslands2 = function (m, n, positions) {
    const dsu = new UnionFind(m * n)
    const answer = []
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    const isValid = (r, c) => !(r < 0 || c < 0 || r >= m || c >= n)
    const getKey = (r, c) => r * n + c
    for (const [row, col] of positions) {
        const landPos = getKey(row, col)
        dsu.addLand(landPos)
        for (const [rowOff, colOff] of directions) {
            if (isValid(row + rowOff, col + colOff)) {
                if (dsu.isLand(getKey(row + rowOff, col + colOff))) {
                    dsu.unionSet(landPos, getKey(row + rowOff, col + colOff))
                }
            }
        }
        answer.push(dsu.numberOfIslands())

    }
    return answer
};
