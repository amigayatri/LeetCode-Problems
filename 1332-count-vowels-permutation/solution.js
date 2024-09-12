/**
 * @param {number} n
 * @return {number}
 */
const modVal = BigInt(Math.pow(10, 9)+7)
class VowelPermutations {
    constructor(n) {
        const startArray = (n, fill = 1n) => {
            return Array.from({length: n}, () => fill)
        }
        this.a = startArray(n)
        this.e = startArray(n)
        this.i = startArray(n)
        this.o = startArray(n)
        this.u = startArray(n)
    }

    getMod (val) {
        return val % modVal
    }

    countA (i) {
        return this.e[i-1] + this.i[i-1] + this.u[i-1]
    }

    countE(i) {
        return this.a[i-1] + this.i[i-1]
    }

    countI(i) {
        return this.e[i-1] + this.o[i-1]
    }

    countO(i) {
        return this.i[i-1]
    }

    countU(i) {
        return this.i[i-1] + this.o[i-1]
    }

    update(i) {
        const mod = this.getMod
        this.a[i] = mod(this.countA(i))
        this.e[i] = mod(this.countE(i))
        this.i[i] = mod(this.countI(i))
        this.o[i] = mod(this.countO(i))
        this.u[i] = mod(this.countU(i))
    }

    getSum(i) {
        return this.getMod(this.a[i] + this.e[i] + this.i[i] + this.o[i] + this.u[i])
    }
}
var countVowelPermutation = function(n) {
    const vowels = new VowelPermutations(n)
    for (let i = 1; i < n; i++) {
        vowels.update(i)
    }
    return vowels.getSum(n-1)
};
