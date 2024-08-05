/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const n = s.length
    const isAlphabetical = (c) => {
        const val = c.charCodeAt(0) - 'a'.charCodeAt(0)
        if (val < 0 || val > 26) return false
        return true
    }
    const pushSubstring = (res, start = 0) => {
        if (start >= n) return n
        let i = start
        let sub = []
        let count = 0
        let started = false
        while (i < n) {
            if (isAlphabetical(s[i])) {
                if (!started) {
                    count = count > 0 ? count : 1
                    started = true
                }
                sub.push(s[i])
                i++
            } else if (s[i] == '[') {
                started = true
                i++
            } else if (s[i] == ']') {
                break
            } else {
                if (started == false) {
                    count = (count*10) + Number(s[i])
                    i++
                } else {
                    let nextLevel = []
                    i = pushSubstring(nextLevel, i)
                    sub.push(...nextLevel)
                }
            }
        }
        const subString = sub.join('').repeat(count)
        res.push(subString)
        return i+1
    }
    let res = []
    let i = 0
    while (i < n) {
        i = pushSubstring(res, i)
    }
    res = res.join('')
    return res
};
