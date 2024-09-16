/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function(preorder) {
    const helper = (i, minLimit, maxLimit) => {
        if (i[0] == preorder.length) {
            return true
        }
        const root = preorder[i[0]]
        if (root <= minLimit || root >= maxLimit) return false
        i[0]++
        const left = helper(i, minLimit, root)
        const right = helper(i, root, maxLimit)
        return left || right
    }
    return helper([0], Number.MIN_VALUE, Number.MAX_VALUE)
};
