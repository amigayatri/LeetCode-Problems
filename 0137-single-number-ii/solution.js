/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let msb = 0, lsb = 0
    for (let num of nums) {
        const newLsb = (~msb & ~lsb & num) | (lsb & ~num)
        const newMsb = (lsb & num) | (msb & ~num)
        msb = newMsb
        lsb = newLsb
    }
    return lsb
};
