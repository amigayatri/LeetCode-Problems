/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    const n = dist.length
    const calcTime = (speed) => {
        let time = 0
        for (let i = 0; i < n; i++) {
            const t = dist[i]/speed
            time += (i == n-1? t : Math.ceil(t))
        }
        return time
    }
    let left = 1, right = Math.pow(10, 7), minSpeed = -1
    while (left <= right) {
        const mid = (left+right)>>1
        if (calcTime(mid) <= hour) {
            minSpeed = mid
            right = mid-1
        } else {
            left = mid+1
        }
    }
    return minSpeed
};
