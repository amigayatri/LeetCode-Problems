/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const n = columnTitle.length
    const Acode = 'A'.charCodeAt(0)
    let colVal = 0
    for (let i = 0; i < n; i++) {
        const charVal = columnTitle.charCodeAt(i) - Acode+1
        colVal = colVal*26+charVal
    }
    return colVal
};
