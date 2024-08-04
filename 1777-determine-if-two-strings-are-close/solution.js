var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false
    const n = word1.length
    let w1Bit = w2Bit = 0
    const mapSize = 26
    let w1Map = new Array(mapSize).fill(0)
    let w2Map = new Array(mapSize).fill(0)
    const calcMapIndex = (c) => c.charCodeAt(0) - 'a'.charCodeAt(0)
    for (let i = 0; i < n; i++) {
        const iC1 = calcMapIndex(word1[i])
        w1Map[iC1]++
        w1Bit |= (1 <<(iC1))
        const iC2 = calcMapIndex(word2[i])
        w2Map[iC2]++
        w2Bit |= (1 << iC2)
    }
    if (w1Bit !== w2Bit) return false
    const sortFn = (a, b) => a-b
    w1Map.sort(sortFn)
    w2Map.sort(sortFn)
    for (let i = 0; i < mapSize; i++) {
        if (w1Map[i] !== w2Map[i]) return false
    }
    return true
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
