/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    let l1 = s1.length, l2 = s2.length, l3 = s3.length
    if (l1+l2 !== l3) {
        return false
    }
    if (l1 < l2) return isInterleave(s2, s1, s3) //to save space
    l1++, l2++
    let dp = new Array(l2).fill(false)
    dp[0] = true
    for (let i2 = 1; i2 < l2; i2++) {
        //populating first row (i1 = 0)
        dp[i2] = dp[i2-1] && s2.charAt(i2-1) === s3.charAt(i2-1)
    }
    for (let i1 = 1; i1 < l1; i1++) {
        dp[0] = dp[0] && s1.charAt(i1-1) === s3.charAt(i1-1) //first column (i2 == 0)
        for (let i2 = 1; i2 < l2; i2++) {
            dp[i2] = (
                (dp[i2] && s1.charAt(i1-1) === s3.charAt(i1+i2-1)) || //prev row
                (dp[i2-1] && s2.charAt(i2-1) === s3.charAt(i1+i2-1))) //prev column
        }
    }
    l1--, l2--
    return dp[l2]
};
