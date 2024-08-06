/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort()
    const lowerBound = (start, word) => {
        let left = start, right = products.length
        while (left < right) {
            const mid = (left+right)>>1
            if(products[mid] >= word) right = mid
            else left = mid+1
        }
        return left
    }
    let results = []
    let start = 0, bsStart = 0
    const n = products.length
    let prefix = ''
    for (let c of searchWord) {
        prefix = prefix.concat(c)
        start = lowerBound(bsStart, prefix)
        let subArr = []
        for (let i = start; i < Math.min(start+3, n); i++) {
            if (products[i].length < prefix.length || !products[i].startsWith(prefix)){
                break
            }
            subArr.push(products[i])
        }
        bsStart = start
        results.push(Array.from(subArr))
    }
    return results
};
