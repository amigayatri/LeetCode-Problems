/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    const maxDay = days[days.length-1]
    const dp = new Array(maxDay+1)
    dp[0] = 0
    let i = 0
    for (let day = 1; day < maxDay+1; day++) {
        if (day < days[i]) {
            dp[day] = dp[day-1]
        } else {
            i++
            const oneDay = dp[day-1] + costs[0]
            let oneWeek = costs[1], oneMonth = costs[2]
            if (day >= 7) oneWeek += dp[day-7]
            if (day >= 30) oneMonth += dp[day-30]
            dp[day] = Math.min(oneDay, oneMonth, oneWeek)
        }
    }
    return dp[maxDay]
};
