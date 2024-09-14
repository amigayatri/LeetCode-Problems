class GraphSet {
    constructor(n) {
        this.graph = Array.from({ length: n }, () => new Set())
        this.indegree = Array.from({ length: n }, () => 0)
    }

    setEdge = (from, to) => {
        if (!this.graph[from].has(to)) {
            this.graph[from].add(to)
            this.indegree[to]++
        }
    }

    topologicalSort = () => {
        const res = [], q = new Queue(), len = this.indegree.length
        for (let i = 0; i < len; i++) {
            if (this.indegree[i] == 0) q.push(i)
        }
        while (!q.isEmpty()) {
            let curr = q.pop()
            res.push(curr)
            for (const child of this.graph[curr]) {
                if (--this.indegree[child] == 0) {
                    q.push(child)
                }
            }
        }
        for (let i = 0; i < len; i++) {
            if (this.indegree[i] > 0) return []
        }
        return res
    }
}
class Graph {
    constructor(n) {
        this.graph = Array.from({ length: n }, () => [])
    }

    setEdge(groupId, item) {
        this.graph[groupId].push(item)
    }

    getGroup(groupId) {
        return this.graph[groupId]
    }
}
var sortItems = function (n, m, group, beforeItems) {
    let totalGroups = m
    const groupIdArr = []
    for (let i = 0; i < n; i++) {
        if (group[i] == -1) {
            groupIdArr[i] = totalGroups++
        } else {
            groupIdArr[i] = group[i]
        }
    }
    const groupGraph = new GraphSet(totalGroups)
    const itemGraph = new GraphSet(n)
    const res = []
    for (let i = 0; i < n; i++) {
        const to = groupIdArr[i]
        for (const x of beforeItems[i]) {
            const from = groupIdArr[x]
            if (from != to) {
                groupGraph.setEdge(from, to)
            }
            itemGraph.setEdge(x, i)
        }
    }
    const ggOrder = groupGraph.topologicalSort()
    const giOrder = itemGraph.topologicalSort()
    if (ggOrder.length == 0 || giOrder.length == 0) return []
    const group2Item = new Graph(totalGroups)
    for (const item of giOrder) {
        group2Item.setEdge(groupIdArr[item], item)
    }
    for (const groupId of ggOrder) {
        res.push(...group2Item.getGroup(groupId))
    }
    return res
};
