const gcd = (a, b) => b == 0? a : gcd(b, a%b)
const lcm = (a, b) => (a/gcd(a, b))*b
const ll = BigInt
var nthUglyNumber = function (n, a, b, c) {
    let lo = 0n, hi = ll(2e9)
    let ab = lcm(a, b), bc = lcm(b, c), ac = lcm(a, c), abc = lcm(a, bc)
    a = ll(a), b = ll(b), c = ll(c), ab = ll(ab), bc = ll(bc), ac = ll(ac), abc=ll(abc)
    const countUglies = (k) => {
        let count = k/a
        count += k/b
        count += k/c
        count -= k/ab
        count -= k/ac
        count -= k/bc
        count += k/abc
        return count
    }
    while (lo < hi) {
        const mid = lo+hi >> 1n
        const cnt = countUglies(mid)
        cnt < n ? lo = mid + 1n : hi = mid
    }
    return lo
};
