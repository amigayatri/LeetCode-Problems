/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
    const top = 5
    const studentsMap = new Map(), ids = []
    const createHeap = () => {
        return new PriorityQueue({compare:  (e1, e2) => {
            return e1-e2
        }})
    }
    for (let [id, score] of items) {
        if (!studentsMap.has(id)) {
            const newHeap = createHeap()
            ids.push(id)
            studentsMap.set(id, newHeap)
        }
        const h = studentsMap.get(id)
        h.enqueue(score)
        if (h.size() > top) h.dequeue()
        studentsMap.set(id, h)
    }
    ids.sort((a, b)=> a-b)
    const res = []
    for (let id of ids) {
        const h = studentsMap.get(id)
        const scores = h.toArray()
        let sum = scores.reduce((acc, curr)=>acc+curr, 0)
        res.push([id, Math.trunc(sum/top)])
        studentsMap.delete(id)
    }
    return res
};
