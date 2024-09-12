/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(k, n) {
    const f = (x) => {
        let ans = 0, r = 1
        for(let i = 1; i<= k; i++) {
            r *= x-i+1
            r = Math.floor(r/i)
            ans += r
            if (ans >= n) break
        }
        return ans
    }
    let low = 1, high = n
    while (low < high) {
        const mid = (low+high)>>1
        if (f(mid) < n) {
            low = mid+1
        } else {
            high = mid
        }
    }
    return low
};
