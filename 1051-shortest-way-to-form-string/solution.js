const shortestWay = function(source, target) {
    const nSource = source.length
    const nextOccurrence = Array.from({length: nSource}, () => Array(26).fill(-1))
    const getIdx = (char) => char.charCodeAt(0)-'a'.charCodeAt(0)
    for (let c = 0; c < 26; c++) {
        nextOccurrence[nSource-1][c] = -1
    }
    nextOccurrence[nSource-1][getIdx(source[nSource-1])] = nSource-1
    for (let idx = nSource-2; idx >= 0; idx--) {
        for (let c = 0; c < 26; c++) {
            nextOccurrence[idx][c] = nextOccurrence[idx+1][c]
        }
        nextOccurrence[idx][getIdx(source[idx])] = idx
    }
    let sourceIterator = 0, count = 1
    for (let idx = 0; idx < target.length; idx++) {
        const c = target[idx], cIdx = getIdx(c)
        if (nextOccurrence[0][cIdx] == -1) {
            return -1
        }
        if (sourceIterator == nSource || nextOccurrence[sourceIterator][cIdx] == -1) {
            count++
            sourceIterator = 0
        }
        sourceIterator = nextOccurrence[sourceIterator][cIdx]+1
    }
    return count
};
