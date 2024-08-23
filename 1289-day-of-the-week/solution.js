/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    if (month < 3) {
        month += 12
        year--
    }
    const yearInCentury = year % 100
    const century = Math.trunc(year/100)
    const decade = month
    let weekday = (day+Math.floor(13*(decade+1)/5)+yearInCentury+Math.floor(yearInCentury/4) + Math.floor(century/4) - (2*century))
    console.log(weekday%7, weekday)
    weekday %= 7
    if (weekday < 0) {
        weekday += 7
    }
    const weekdayMap = new Map([
        [0, 'Saturday'],
        [1, 'Sunday'],
        [2, 'Monday'],
        [3, 'Tuesday'],
        [4, 'Wednesday'],
        [5, 'Thursday'],
        [6, 'Friday']
    ])
    return weekdayMap.get(weekday)
};
