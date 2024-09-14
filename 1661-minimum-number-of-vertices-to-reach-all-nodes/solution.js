/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    const incoming = Array.from({length: n}, () => false)
    for (const [_origin, to] of edges) {
        incoming[to] = true
    }
    let ans = []
    for (let i = 0; i < n; i++) {
        if (!incoming[i]) {
            ans.push(i)
        }
    }
    return ans
};
