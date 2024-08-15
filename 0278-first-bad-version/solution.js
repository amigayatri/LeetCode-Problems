/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    const memo = new Map()
    const findIfBad = (i) => {
        if (memo.has(i)) return memo.get(i)
        const isBad = isBadVersion(i)
        memo.set(i, isBad)
        return isBad
    }
    const findFirstNeg = (n) => {
        let left = 0, right = n
        while (left <= right) {
            const mid = Math.floor((left + right)/2)
            if (isBadVersion(mid)) {
                right = mid-1
            } else {
                left = mid+1
            }
        }
        return left
    }
    return function(n) {
        return findFirstNeg(n)
    };
};
