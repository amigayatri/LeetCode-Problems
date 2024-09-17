const getFactors = function (n) {
    const ans = [], stack = [[n]]
    while (stack.length > 0) {
        const factors = stack.pop()
        const lastFactor = factors.pop()
        const start = factors.length == 0 ? 2 : factors.at(-1)
        for (let i = start; i <= Math.floor(lastFactor / i); i++) {
            if ((lastFactor % i) == 0) {
                const newFactors = Array.from(factors)
                newFactors.push(i)
                newFactors.push(lastFactor/i)
                stack.push(newFactors)
                ans.push(Array.from(newFactors))
            }
        }
    }
    return ans
};
