/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    const n = profits.length
    let projects = []
    for (let i = 0; i < n; i++) {
        projects.push([capital[i], profits[i]])
    }
    projects.sort((a, b) => {
            return a[0]-b[0]
    })
    let pq = new PriorityQueue({compare: (e1, e2) => {
        return e2-e1
    }})
    let ptr = 0
    for (let i = 0; i < k; i++) {
        while(ptr < n && projects[ptr][0] <= w) {
            pq.enqueue(projects[ptr][1])
            ptr++
        }
        if (pq.isEmpty()) break
        w += pq.dequeue()
    }
    return w
};
