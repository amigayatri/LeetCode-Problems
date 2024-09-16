/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    const dayInMinutes = 24 * 60
    const getMinutes = (timeStr) => {
        const [hour, minutes] = timeStr.split(':')
        return  (Number(hour)*60)+Number(minutes)
    }
    const calculateDiff = (time1, time2) => {
        const absDiff = Math.abs(time1-time2)
        return Math.min(absDiff, dayInMinutes-absDiff)
    }
    const timesInMinutes = Array.from({length: dayInMinutes}, () => 0)
    const n = timePoints.length
    let minTime = dayInMinutes, maxTime = 0
    for (const timeStr of timePoints) {
        const currTime = getMinutes(timeStr)
        minTime = Math.min(minTime, currTime)
        maxTime = Math.max(maxTime, currTime)
        timesInMinutes[currTime]++
    }
    const sortedTimes = []
    if (n == 2) {
        sortedTimes.push(minTime, maxTime)
        return calculateDiff(minTime, maxTime)
    }
    for (let i = minTime; i <= maxTime; i++) {
        if (timesInMinutes[i] > 0) {
            const currTime = Array.from({length: timesInMinutes[i]}, () => i)
            sortedTimes.push(...currTime)
        }
    }
    let prevTime = maxTime, minDiff = dayInMinutes
    for (let time of sortedTimes) {
        minDiff = Math.min(minDiff, calculateDiff(time, prevTime))
        prevTime = time
    }
    return minDiff
};
