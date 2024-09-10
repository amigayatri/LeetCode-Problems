/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const n = citations.length
    let left = 0, right = n-1
    while (left <= right) {
        const mid = (left+right)>>1
        if (citations[mid] == n-mid) {
            return citations[mid]
        } else if (citations[mid] < n-mid) {
            left = mid+1
        } else {
            right = mid-1
        }
    }
    return n-left
};
