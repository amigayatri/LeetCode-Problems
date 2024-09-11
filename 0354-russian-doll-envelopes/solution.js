/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    const sortedEnv = envelopes.toSorted(([w1, h1], [w2, h2]) => w1 == w2 ? h2-h1 : w1-w2)
    const sub = [sortedEnv[0][1]]
    const binarySearch = (target) => {
        let left = 0, right = sub.length-1
        while (left <= right) {
            const mid = (left+right)>>1
            if (sub[mid] == target) return mid
            if (sub[mid] < target) {
                left = mid+1
            } else {
                right = mid-1
            }
        }
        return left
    }
    for (const [_w, height] of sortedEnv) {
        if (height > sub.at(-1)) {
            sub.push(height)
        } else {
            const i = binarySearch(height)
            sub[i] = height
        }
    }
    return sub.length
};
