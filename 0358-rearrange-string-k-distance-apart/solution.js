/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var rearrangeString = function(s, k) {
    const frequencies = new Map()
    const mostChar = new Set(), secondChars = new Set()
    let maxFreq = 0
    for (const c of s) {
        const freq = 1 + (frequencies.get(c) || 0)
        frequencies.set(c, freq)
        if (freq > maxFreq) maxFreq = freq
    }
    for (const [char, count] of frequencies) {
        if (count == maxFreq) {
            mostChar.add(char)
        } else if (count == maxFreq-1) {
            secondChars.add(char)
        }
    }

    const segments = Array.from({length: maxFreq}, () => [])
    for (let i = 0; i < maxFreq; i++) {
        for (const char of mostChar) {
            segments[i].push(char)
        }
        if (i < maxFreq-1) {
            for (const char of secondChars) {
                segments[i].push(char)
            }
        }
    }
    let segmentId = 0
    for (const [char, count] of frequencies) {
        if (!mostChar.has(char) && !secondChars.has(char)) {
            for (let freq = count; freq > 0; freq--) {
                segments[segmentId].push(char)
                segmentId = (segmentId+1)%(maxFreq-1)
            }
        }
    }
    for (let i = 0; i < maxFreq-1; i++) {
        if (segments[i].length < k) return ''
    }
    let ans = []
    for (let i = 0; i < maxFreq; i++) {
        ans.push(segments[i].join(''))
    }
    return ans.join('')
};
