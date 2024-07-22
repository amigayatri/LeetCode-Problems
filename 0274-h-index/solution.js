/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let min = 1000, max = 0
    for (let cit of citations) {
        if (cit < min) min = cit
        if (cit > max) max = cit
    }

    const diff = max - min
    let count = new Array(diff + 1).fill(0)
    for (let cit of citations) {
        const i = cit - min
        count[i]++
    }
    console.log(count)
    let totalCount = 0
    for (let i = diff; i >= 0; i--) {
        const el = i + min
        totalCount += count[i]
        if(totalCount >= el) return el
    }
    return totalCount
};
