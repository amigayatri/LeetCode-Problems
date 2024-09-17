class Point {
    constructor (x, y, id, status, graph) {
        this.x = x
        this.y = y
        this.id = id
        this.status = status
        this.graph = graph
    }

    isAvailable() {
        return this.graph.isAvailable(this.id)
    }

    manhattanDistance (otherPoint) {
        return Math.abs(this.x-otherPoint.x)+Math.abs(this.y-otherPoint.y)
    }

    setStatus(newStatus) {
        this.status = newStatus
    }
}
class Graph {
    constructor(n, startStatus) {
        this.size = n
        this.startStatus = startStatus
        this.nodes = Array.from({length: n}, () => undefined)
    }

    addNode(x, y, id) {
        this.nodes[id] = new Point(x, y, id, this.startStatus, this)
    }

    forEach(mapFn) {
        this.nodes.forEach(mapFn)
    }

    isAvailable(id) {
        return this.nodes[id] === undefined || this.nodes[id].status === this.startStatus
    }
}

class Campus {
    constructor (nBikes, nWorkers) {
        this.bikes = new Graph(nBikes, false)
        this.workers = new Graph(nWorkers, -1)
        this.distToPairs = Array.from({length: 2000}, () => [])
        this.minDistance = 2001
        this.maxDistance = -1
    }

    addBike([x, y], id) {
        this.bikes.addNode(x, y, id)
    }

    addWorker([x, y], id) {
        this.workers.addNode(x, y, id)
    }
    
    addDistance(bike, worker) {
        const distance = bike.manhattanDistance(worker)
        if (distance < this.minDistance) this.minDistance = distance
        if (distance > this.maxDistance) this.maxDistance = distance
        this.distToPairs[distance].push({bike, worker})
    }

    getAvailableDistances() {
        this.bikes.forEach((bike) => {
            this.workers.forEach((worker) => {
                this.addDistance(bike, worker)
            })
        })
    }

    assign() {
        this.getAvailableDistances()
        let pairCount = 0, currDis = this.minDistance
        let res =  Array.from({length: this.workers.size}, () => -1)
        while (pairCount < this.workers.size) {
            for (const {worker, bike} of this.distToPairs[currDis]) {
                if (worker.isAvailable() && bike.isAvailable()) {
                    pairCount++
                    res[worker.id] = bike.id
                    worker.setStatus(true)
                    bike.setStatus(true)
                }
            }
            currDis++
        }
        return res
    }
}

const assignBikes = function(workers, bikes) {
    const nWorkers = workers.length, nBikes = bikes.length
    const campus = new Campus(nBikes, nWorkers)
    bikes.forEach((bike, id) => campus.addBike(bike, id))
    workers.forEach((worker, id) => campus.addWorker(worker, id))
    return campus.assign()
};
