var findPermutation = function(s) {
    const n = s.length
    const res = Array(n+1)
    let i = 1
    res[0] = 1
    while (i <= n) {
        res[i] = i+1
        const j = i
        if (s.charAt(i-1) == 'D') {
            while (i <= n && s.charAt(i-1) == 'D') i++
            for (let k = j-1, c = i; k <= i-1; k++, c--) {
                res[k] = c
            }
        } else {
            i++
        }
    }
    return res
};
