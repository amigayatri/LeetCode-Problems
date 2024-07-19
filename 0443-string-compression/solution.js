/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    const n = chars.length
    if (n <= 1) return n
    let i = 0, res = 0, countArr = []
    while(i<n){
        let count = 1
        while(i+count < n && chars[i+count] == chars[i]) count++
        chars[res] = chars[i]
        res++
        if (count > 1) {
            countArr = count.toString().split('')
            console.log(countArr, count)
            for (let j = 0; j < countArr.length; j++) {
                chars[res++] = countArr[j]
            }
        }
        i += count
    }
    return res
};
