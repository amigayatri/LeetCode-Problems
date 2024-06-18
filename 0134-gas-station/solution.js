/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const n = gas.length
    let curGain = totalGain = answer = 0
    for (let i = 0; i < n; i++) {
        const localGain = gas[i] - cost[i]
        curGain += localGain
        totalGain += localGain
        if (curGain < 0) {
            answer = i + 1
            curGain = 0
        }
    }
    return totalGain >= 0 ? answer : -1
};
