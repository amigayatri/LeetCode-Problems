/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    wordList.push(beginWord)
    const wordToPatts = {}
    const patterns = {}
    for (let word of wordList) {
        const list = []
        for (let i = 0; i < word.length; i++) {
            const newPat = word.slice(0, i) + '*' + word.slice(i + 1)
            if (patterns[newPat] == undefined) {
                patterns[newPat] = []
            }
            patterns[newPat].push(word)
            list.push(newPat)
        }
        wordToPatts[word] = list
    }
    let toVisitFront = new Queue([[beginWord, 1]])
    let toVisitBack = new Queue([[endWord, 1]])
    let testedFront = new Map(), testedBack = new Map()
    testedFront.set(beginWord, 1)
    testedBack.set(endWord, 1)
    const visitWordNode = (queue, tested, testedOthers) => {
        const sz = queue.size()
        for (let i = 0; i < sz; i++) {
            const [word, level] = queue.pop()
            const patts = wordToPatts[word]
            if (patts == undefined) continue
            for (const p of patts) {
                for (const w of patterns[p]) {
                    if (testedOthers.has(w)) {
                        return level + testedOthers.get(w)
                    }
                    if (!tested.has(w)) {
                        queue.push([w, level+1])
                        tested.set(w, level+1)
                    }
                }
            }
        }
        return -1
    }
    let ans = -1
    while (!toVisitFront.isEmpty() && !toVisitBack.isEmpty()) {
        if (toVisitFront.size() <= toVisitBack.size()) {
            ans = visitWordNode(toVisitFront, testedFront, testedBack)
        } else {
            ans = visitWordNode(toVisitBack, testedBack, testedFront)
        }
        if (ans > -1) {
            return ans
        }
    }
    return 0
};
