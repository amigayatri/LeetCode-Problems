/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
    const days = Number(date.substring(8))
    const month = Number(date.substring(5, 7))
    const year = Number(date.substring(0, 4))
    let prev = 0
    if (month > 1) {
        let prevDays = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
        prev += prevDays[month-2]
        if (month > 2) {
            const isLeap = ((year % 4) == 0 && ((year % 100) != 0) || (year % 400) == 0 )
            isLeap && prev++
        }
    }
    return days + prev
};
