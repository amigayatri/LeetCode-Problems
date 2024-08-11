/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const n = nums.length
    let res = []
    const generate = (comb = []) => {
        if (comb.length === n) {
            res.push([...comb])
            return
        }
        for (const num of nums) {
            if (!comb.includes(num)) {
                comb.push(num)
                generate(comb)
                comb.pop()
            }
        }
    }
    generate()
    return res
};
