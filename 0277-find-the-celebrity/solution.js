/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function (knows) {
    let n, memo = new Map(), counter = 0
    const discoverIfKnows = (a, b) => {
        const key = `${a}->${b}`
        if (memo.has(key)) {
            return memo.get(key)
        }
        const res = knows(a, b)
        counter++
        memo.set(key, res)
        return res
    }
    const setN = (numPeople) => {
        n = numPeople
    }
    const ruleOutCandidates = (n) => {
        setN(n)
        let candidate = 0
        for (let i = 0; i < n; i++) {
            if (discoverIfKnows(candidate, i)) {
                candidate = i
            }
        }
        if (confirm(candidate)) return candidate
        return -1
    }
    const confirm = (celebCand) => {
        for (let i = 0; i < n; i++) {
            if (i !== celebCand && (!discoverIfKnows(i, celebCand) || discoverIfKnows(celebCand, i))) {
                return false
            }
        }
        return true
    }
    return function (n) {
        return ruleOutCandidates(n)
    };
};
