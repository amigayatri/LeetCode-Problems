/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const n = arr.length
    const seen = new Array(n).fill(false)
    const reachZero = (pos) => {
        if(pos < 0 || pos >= n || seen[pos]) return false
        if(arr[pos] == 0) return true
        seen[pos] = true
        const jump = arr[pos]
        return reachZero(pos+jump) || reachZero(pos-jump)
    }
    return reachZero(start)
};
