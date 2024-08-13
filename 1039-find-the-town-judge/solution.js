/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    if (n == 1) return 1
    const judgeTrusted = n - 1
    if (trust.length < judgeTrusted) return -1
    let trustScore = new Array(n).fill(0)
    for (let [a, b] of trust) {
        trustScore[a - 1]--
        trustScore[b - 1]++
    }
    for (let i = 0; i < n; i++) {
        if (trustScore[i] == judgeTrusted) {
            return i + 1
        }
    }
    return -1
};
