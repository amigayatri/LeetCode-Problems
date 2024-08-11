/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const memo = new Map([[0, ['']]])
    const generate = function (size) {
        if (memo.has(size)) {
            return memo.get(size)
        }
        const answer = []
        for (let left = 0; left < size; left++) {
            const leftOp = memo.get(left) === undefined ? generate(left) : memo.get(left)
            const right = size-1-left
            const rightOp = memo.get(right) === undefined ? generate(right) : memo.get(right)
            for (const leftStr of leftOp) {
                for (const rightStr of rightOp) {
                    answer.push('(' + leftStr + ')' + rightStr)
                }
            }
        }
        memo.set(size, answer)
        return answer
    }
    return generate(n)
};
