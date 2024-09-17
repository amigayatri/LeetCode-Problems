class Graph {
    constructor(n) {
        this.nodes = new Map()
        this.indegree = new Map()
        for (let i = 1; i <= n; i++) {
            this.nodes.set(i, new Set())
            this.indegree.set(i, 0)
        }
    }

    addEdge(from, to) {
        this.nodes.get(from).add(to)        
        this.increaseDegree(to)
    }

    increaseDegree(course) {
        this.indegree.set(course, (this.indegree.get(course) || 0) + 1)
    }

    decreaseDegree(course) {
        this.indegree.set(course, (this.indegree.get(course) || 0) - 1)
        return this.indegree.get(course)
    }

    getIndegreeByValue(value) {
        const res = []
        for (const [course, inCount] of this.indegree) {
            if (inCount === value) {
                res.push(course)
            }
        }
        return res
    }

    getInDegree(course) {
        return this.indegree.get(course)
    }

    getNext(course) {
        return this.nodes.get(course)
    }
}
const minimumSemesters = function (n, relations) {
    const graph = new Graph(n)
    for (const [from, to] of relations) {
        graph.addEdge(from, to)
    }
    let step = 0, studiedCount = 0
    let canStudy = Queue.fromArray(graph.getIndegreeByValue(0))
    while (!canStudy.isEmpty()) {
        step++
        const size = canStudy.size()
        for (let i = 0; i < size; i++) {
            const course = canStudy.pop()
            studiedCount++
            for (const endNode of graph.getNext(course)) {
                const newDegree = graph.decreaseDegree(endNode)
                if (newDegree === 0) {
                    canStudy.push(endNode)
                }
            }
        }
    }
    return studiedCount === n ? step : -1
};
