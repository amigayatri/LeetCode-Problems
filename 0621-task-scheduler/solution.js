/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let counter = new Map()
    for(let task of tasks) {
        if(counter.has(task)) {
            counter.set(task, counter.get(task)+1)
        } else {
            counter.set(task, 1)
        }
    }
    let heap = new MaxPriorityQueue()
    for (let [task, count] of counter) {
        heap.enqueue(task, count)
    }
    let time = 0
    while (heap.size() > 0) {
        let cycle = n+1, taskCount = 0
        const toAdd = []
        while (heap.size() > 0 && cycle--) {
            const obj = heap.dequeue()
            const priority = obj.priority, task = obj.element
            if (priority > 1) toAdd.push({task, priority: priority-1})
            taskCount++
        }
        for (let obj of toAdd) {
            heap.enqueue(obj.task, obj.priority)
        }
        if (heap.isEmpty()) time += taskCount
        else time += n+1
    }
    return time
};
