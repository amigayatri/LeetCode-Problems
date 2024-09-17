const expand = function(s) {
    const allOptions = [], expandedWords = []
    const storeAllOptions = () => {
        for(let pos = 0; pos < s.length; pos++) {
            const currOptions = []
            if (s.charAt(pos) != '{') {
                currOptions.push(s.charAt(pos))
            } else {
                while(s.charAt(pos) != '}') {
                    if (s.charAt(pos) >= 'a' && s.charAt(pos) <= 'z') {
                        currOptions.push(s.charAt(pos))
                    }
                    pos++
                }
                currOptions.sort()
            }
            allOptions.push(currOptions)
        }
    }
    const generateWords = (currString) => {
        if (currString.length === allOptions.length) {
            expandedWords.push(currString.join(''))
            return
        }
        const currOptions = allOptions[currString.length]
        for (const c of currOptions) {
            currString.push(c)
            generateWords(currString)
            currString.pop()
        }
    }
    storeAllOptions()
    generateWords([])
    return expandedWords
};
