
    const countSubstrings = function(s) {
        const n = s.length
        let dp = new Array(n)
        let count = 0
        for (let i = 0; i < n; i++) {
            dp[i] = new Array(n).fill(false)
            dp[i][i] = true
            count++
            if (i+1 < n && s[i] == s[i+1]) {
                dp[i][i+1] = true
                count++
            }
        }
        for (let diff = 2; diff < n; diff++) {
            for (let i = 0; i < n - diff; i++) {
                let j = i + diff
                if (s[i] === s[j] && dp[i+1][j-1]) {
                    dp[i][j] = true
                    count++
                }
            }
        }
        return count
    };


