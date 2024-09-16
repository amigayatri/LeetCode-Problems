/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
    const fCalls = new Map()
    fCalls.set(1, k)
    fCalls.set(2, k*k)
    const f = (x) => {
        if (fCalls.has(x)) {
            return fCalls.get(x)
        }
        const answer = (f(x-1)+f(x-2))*(k-1)
        fCalls.set(x, answer)
        return answer
    }
    return f(n)
};
