/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function (costs, k, candidates) {
    const n = costs.length
    let res = 0, nextHead = candidates, nextTail = n - 1 - candidates
    let pq = new PriorityQueue({
        compare: (a, b) => {
            if (a.cost == b.cost) return a.i - b.i;
            return a.cost - b.cost
        }
    })
    for (let i = 0; i < candidates; i++) {
        pq.enqueue({ cost: costs[i], i: 0 })
    }
    for (let i = Math.max(candidates, n - candidates); i < n; i++) {
        pq.enqueue({ cost: costs[i], i: 1 })
    }
    for (let c = 0; c < k; c++) {
        const { cost, i } = pq.dequeue()
        res += cost
        if (nextHead <= nextTail) {
            if (i == 0) {
                pq.enqueue({ cost: costs[nextHead], i: 0 })
                nextHead++
            } else {
                pq.enqueue({ cost: costs[nextTail], i: 1 })
                nextTail--
            }
        }
    }
    return res
};
