/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    const n = s.length
    if (n == 0) return 0
    if (n == 1) return 1
    let hash = new Map()
    for (let i = 0; i < n; i++) {
        const c = s[i]
        if (hash.has(c)) {
            let aux = hash.get(c)
            hash.set(c, { start: aux.start, end: i })
        } else {
            hash.set(c, { start: i , end: i})
        }
    }
    let indexes = []
    let start = 0, end = -1
    for (let pos of hash.values()) {
        if (pos.start > end) {
            indexes.push(end - start + 1)
            start = pos.start
            end = pos.end
        } else {
            end = Math.max(pos.end, end)
        }
    }
    indexes.shift()
    indexes.push(end - start + 1)
    return indexes
};
