/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    const possible = (capacity) => {
        let daysNeeded = 1, currLoad = 0
        for (const weight of weights) {
            currLoad += weight
            if (currLoad > capacity) {
                daysNeeded++
                currLoad = weight
            }
        }
        return daysNeeded <= days
    }
    let totalLoad = 0, maxLoad = 0
    for (const weight of weights) {
        totalLoad += weight
        if (weight > maxLoad) maxLoad = weight
    }
    let l = maxLoad, r = totalLoad
    while (l < r) {
        const mid = (l+r)>>1
        if (possible(mid)) {
            r = mid
        } else {
            l = mid+1
        }
    }
    return l
};
