/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
    const reversible = new Map([['0', '0'], ['1', '1'], ['6', '9'], ['8', '8'], ['9', '6']])
    const generateStroboNumbers = (size) => {
        if (size === 0) {
            return ['']
        }
        if (size === 1) {
            return ['0', '1', '8']
        }
        const prevStroboNums = generateStroboNumbers(size-2)
        const currStroboNums = []
        for (const prev of prevStroboNums) {
            for (const [firstChar, secondChar] of reversible) {
                if (firstChar != '0' || size != n) {
                    currStroboNums.push(firstChar+prev+secondChar)
                }
            }
        }
        return currStroboNums
    }
    return generateStroboNumbers(n)
};
