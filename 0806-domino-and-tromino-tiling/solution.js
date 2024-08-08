/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
    const mod = 1000000007n
    if (n <= 2) return n
    let mSize = 3
    let answer = [
        [2n, 0n, 1n],
        [1n, 0n, 0n],
        [0n, 1n, 0n]
    ]
    const matrixProduct = function (m1, m2) {
        let ans = new Array(mSize)
        for (let r = 0; r < mSize; r++) {
            ans[r] = new Array(mSize)
            for (let c = 0; c < mSize; c++) {
                let res = 0n
                for (let k = 0; k < mSize; k++) {
                    res += (m1[r][k] * m2[k][c])
                }
                ans[r][c] = res
            }
        }
        for (let r = 0; r < mSize; r++) {
            for (let c = 0; c < mSize; c++) {
                m1[r][c] = ans[r][c]
            }
        }
    }
    const matrixExpo = function (answer, expo) {
        if (expo == 1) return
        matrixExpo(answer, expo >> 1)
        matrixProduct(answer, answer)
        if (expo % 2 === 1) {
            matrixProduct(answer, [
                [2n, 0n, 1n],
                [1n, 0n, 0n],
                [0n, 1n, 0n]
            ])
        }
    }
    matrixExpo(answer, n - 2)
    return (answer[0][0] * 2n + answer[0][1] + answer[0][2])%mod
};
