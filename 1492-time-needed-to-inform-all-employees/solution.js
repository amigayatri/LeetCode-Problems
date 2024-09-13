/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, managers, informTime) {
    const subordinates = new Map()
    for (let i = 0; i < n; i++) {
        const manager = managers[i]
        !subordinates.has(manager) && subordinates.set(manager, [])
        subordinates.get(manager).push(i)
    }
    const queue = new Queue()
    let maxTime = 0
    queue.push({manager: headID, time: 0})
    while(!queue.isEmpty()) {
        const {manager, time} = queue.pop()
        const timeSubs = time+informTime[manager]
        maxTime = Math.max(maxTime, timeSubs)
        if (!subordinates.has(manager)) continue
        for(const sub of subordinates.get(manager)) {
            queue.push({manager: sub, time: timeSubs})
        }
    }
    return maxTime
};
