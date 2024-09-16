var addBoldTag = function(s, words) {
    const n = s.length
    const bold = Array.from({length: n}, () => false)
    for (const word of words) {
        let start = s.indexOf(word)
        while (start != -1) {
            for (let i = start; i < start+word.length; i++) bold[i] = true
            start = s.indexOf(word, start+1)
        }
    }
    const tag = {open: '<b>', close: '</b>'}, answer = []
    for (let i = 0; i < n; i++) {
        if (bold[i] && (i == 0 || !bold[i-1])) {
            answer.push(tag.open)
        }
        answer.push(s.charAt(i))
        if (bold[i] && (i == n-1 || !bold[i+1])) {
            answer.push(tag.close)
        }
    }
    return answer.join('')
};
