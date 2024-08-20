/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    const Acode = 'A'.charCodeAt(0)
    let title = []
    while (columnNumber > 0) {
        columnNumber--
        title.push(String.fromCharCode(Acode+columnNumber%26))
        columnNumber = Math.floor(columnNumber/26)
    }
    return title.reverse().join('')
};
