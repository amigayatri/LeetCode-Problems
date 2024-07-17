/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    let start = 0, end = Number.MIN_SAFE_INTEGER
    for (let day of bloomDay) {
        if (day > end) end = day
    }
    const getNumOfBouquets = (mid) => {
        let numOfBouquets = 0
        let count = 0
        for (let day of bloomDay) {
            if (day <= mid) count++
            else count = 0
            if (count == k) {
                numOfBouquets++
                count = 0
            }
        }
        return numOfBouquets
    }
    let minDays = -1
    while (start <= end) {
        const mid = (start + end) >> 1
        const midBouquets = getNumOfBouquets(mid)
        if (midBouquets  >= m) {
            minDays = mid
            end = mid-1
        } else {
            start = mid + 1
        }
    }
    return minDays
};
