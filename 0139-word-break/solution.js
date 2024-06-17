var wordBreak = function(s, wordDict) {
    const n = s.length
    let dictionary = new Set(wordDict)
    let memo = new Array(n+1).fill(false)
    memo[0] = true
    for (let i = 1; i < n + 1; i++) {
        for (let j = 0; j < i; j++) {
            if(memo[j] && dictionary.has(s.substring(j, i))) {
                memo[i] = true
                break
            }
        }
    }
    return memo[n]
};
