class Leaderboard {
    constructor() {
        this.points = new Map()
        this.heap = new PriorityQueue({compare: (a, b) => a-b})
    }

    addScore(playerId, score) {
        this.points.set(playerId, (this.points.get(playerId)||0)+score)
    }

    top(K) {
        this.heap.clear()
        let selectedPoints = 0
        for (let playerPoints of this.points.values()) {
            this.heap.enqueue(playerPoints)
            if (this.heap.size() > K) this.heap.dequeue()
        }
        while (!this.heap.isEmpty()) {
            selectedPoints += this.heap.dequeue()
        }
        return selectedPoints
    }

    reset(playerId) {
        this.points.delete(playerId)
    }
}
