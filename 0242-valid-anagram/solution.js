/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (!s || !t) return false;
    if (s.length !== t.length) return false;

    const sLetters = {};
    const tLetters = {};

    function countLetters(str, letters) {
        str.split('').forEach(letter => {
            letters[letter] = letters[letter] + 1 || 1;
        })
    }

    countLetters(s, sLetters);
    countLetters(t, tLetters);

    for (const letter in sLetters) {
        if (!Object.hasOwn(tLetters, letter)) return false;
        if (sLetters[letter] !== tLetters[letter]) return false;
    }

    return true;
};
