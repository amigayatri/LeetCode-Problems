/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    if (n==0) return [0]
    let answer = new Array(n+1)
    answer[0] = 0
    answer[1] = 1
    for (let i = 2; i < n+1; i++) {
        answer[i] = answer[i>>1] + (1 & i)
    }
    return answer
};
