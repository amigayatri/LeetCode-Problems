/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
    const n = questions.length, p = 0, s = 1
    const memo = new Map()
    memo.set(n-1, questions[n-1][p])
    const maxPointsByStart = (start) => {
        if (start >= n) return 0
        if (memo.has(start)) return memo.get(start)
        const skip = questions[start][s]
        const maxWith = questions[start][p] + maxPointsByStart(start+skip+1)
        const maxWithout = maxPointsByStart(start+1)
        const max = Math.max(maxWith, maxWithout)
        memo.set(start, max)
        return max
    }
    maxPointsByStart(0)
    return memo.get(0)
};
