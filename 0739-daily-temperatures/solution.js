var dailyTemperatures = function(temperatures) {
    const n = temperatures.length
    let answer = new Array(n).fill(0)
    let hottest = 0
    for(let currDay = temperatures.length -1; currDay >= 0; currDay--) {
        const currTemp = temperatures[currDay]
        if (currTemp >= hottest) {
            hottest = currTemp
            continue
        }
        let days = 1
        while(temperatures[currDay + days] <= currTemp) {
            days += answer[currDay+days]
        } 
        answer[currDay] = days
    }
   return answer;
};
