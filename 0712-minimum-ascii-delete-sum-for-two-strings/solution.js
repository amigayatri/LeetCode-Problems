/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    const m = s1.length, n = s2.length
    const computeCost = Array.from({length: m+1}, () => Array(n+1))
    computeCost[0][0] = 0
    for (let idx1 = 1; idx1 <= m; idx1++) {
        computeCost[idx1][0] = computeCost[idx1-1][0]+s1.charCodeAt(idx1-1)
    }
    for (let idx2 = 1; idx2 <= n; idx2++) {
        computeCost[0][idx2] = computeCost[0][idx2-1]+s2.charCodeAt(idx2-1)
    }
    for (let idx1 = 1; idx1 <= m; idx1++) {
        for (let idx2 = 1; idx2 <= n; idx2++) {
            if (s1.charAt(idx1-1) == s2.charAt(idx2-1)) {
                computeCost[idx1][idx2] = computeCost[idx1-1][idx2-1]
            } else {
                computeCost[idx1][idx2] = Math.min(s1.charCodeAt(idx1-1)+computeCost[idx1-1][idx2], s2.charCodeAt(idx2-1)+computeCost[idx1][idx2-1])
            }
        }
    }
    return computeCost[m][n]
};
