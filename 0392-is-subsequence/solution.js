/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (source, target) {
    let letterIndicesTable = new Map()
    for (let i = 0; i < target.length; i++) {
        const char = target.charAt(i)
        if (!letterIndicesTable.has(char)) {
            letterIndicesTable.set(char, [])
        }
        const arr = letterIndicesTable.get(char)
        arr.push(i)
    }
    const checkSource = (hash, source) => {
        let currMatchIndex = -1
        for (const char of source) {
            if (!hash.has(char)) {
                return false
            }
            const indexArr = hash.get(char)
            let isMatched = false
            for (let matchIndex of indexArr) {
                if (currMatchIndex < matchIndex) {
                    currMatchIndex = matchIndex
                    isMatched = true
                    break
                }
            }
            if (!isMatched) return false
        }
        return true
    }
    return checkSource(letterIndicesTable, source)
}
