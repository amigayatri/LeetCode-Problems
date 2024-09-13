/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    const n = startTime.length
    const memo = Array.from({length: 50001}, () => -1)
    const jobs = []
    const createJob = (i) => {
        return {start: startTime[i], end: endTime[i], profit: profit[i]}
    }
    for (let i = 0; i < n; i++) {
        jobs.push(createJob(i))
    }
    jobs.sort((a, b) => a.start-b.start)
    let sortedStart = jobs.map((job) => job.start)
const findNextJob = (lastEndingTime) => {
        let start = 0, end = n-1, nextIdx = n
        while (start <= end) {
            const mid = (start+end)>>1
            if (sortedStart[mid] >= lastEndingTime) {
                nextIdx = mid
                end = mid-1
            } else {
                start = mid+1
            }
        }
        return nextIdx
    }
    const findMaxProfit = (position) => {
        if (position == n) return 0
        if (memo[position] != -1) return memo[position]
        const nextIdx = findNextJob(jobs[position].end)
        const maxProfit = Math.max(findMaxProfit(position+1), jobs[position].profit+findMaxProfit(nextIdx))
        memo[position] = maxProfit
        return maxProfit
    }
    return findMaxProfit(0)
};
