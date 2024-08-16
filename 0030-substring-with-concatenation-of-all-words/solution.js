/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const n = s.length, k = words.length
    const wordSz = words[0].length, subSz = wordSz*k
    const wordCount = new Map()
    for (let word of words) {
        wordCount.set(word, (wordCount.get(word) || 0)+1)
    }
    let result = []
    const sliddingWindow = (left) => {
        const wordsFound = new Map()
        let wordsUsed = 0, excessWord = false
        for (let right = left; right <= n-wordSz; right+=wordSz) {
            const sub = s.substring(right, right+wordSz)
            if (!wordCount.has(sub)) {
                wordsFound.clear()
                wordsUsed = 0
                excessWord = false
                left = right+wordSz
            } else {
                while (right - left == subSz || excessWord) {
                    const leftmostWord = s.substring(left, left+wordSz)
                    left+=wordSz
                    wordsFound.set(leftmostWord, wordsFound.get(leftmostWord)-1)
                    if (wordsFound.get(leftmostWord) >= wordCount.get(leftmostWord)) {
                        excessWord = false
                    } else {
                        wordsUsed--
                    }
                }
                wordsFound.set(sub, (wordsFound.get(sub)||0)+1)
                if (wordsFound.get(sub) <= wordCount.get(sub)) {
                    wordsUsed++
                } else {
                    excessWord = true
                }
                if (wordsUsed == k && !excessWord) {
                    result.push(left)
                }
            }
        }
    }
    for (let i = 0; i < wordSz; i++) {
        sliddingWindow(i)
    }
    return result
};
