const isAlphanumeric = (character) => {
    let code = character.charCodeAt(0)
    if (!isNaN(code) && (
        (code > 47 && code < 58) || // numeric (0-9)
        (code > 96 && code < 123))) { // lower alpha (a-z)
      return true;
    }
    return false
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length < 2) return true
    s = s.toLowerCase()
    let start = 0, end = s.length-1
    while (start < end) {
        while(!isAlphanumeric(s.charAt(start)) && start < end) {
            start++;
        }
        while(!isAlphanumeric(s.charAt(end)) && end > start) {
            end--;
        }
        if(s.charAt(start) !== s.charAt(end)) return false
        start++
        end--
    }
    return true
};
