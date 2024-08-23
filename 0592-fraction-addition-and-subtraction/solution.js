/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
    const n = expression.length
    const fractions = []
    let readingNumerator = true
    let numerator = 0, denominator = 0, commonDenominator = 1, sign, startIndex
    if (expression[0] == '-') {
        startIndex = 1
        sign = -1
    } else {
        startIndex = 0
        sign = 1
    }
    const gcd = (a, b) => b == 0 ? a : gcd(b, a % b)
    const lcm = (a, b) => (a / gcd(a, b)) * b
    for (let i = startIndex; i < n; i++) {
        const c = expression[i]
        if (readingNumerator) {
            if (c >= '0' && c <= '9') {
                numerator = (numerator * 10) + Number(c)
            } else {
                readingNumerator = false
                denominator = 0
            }
        } else {
            if (c >= '0' && c <= '9') {
                denominator = (denominator * 10) + Number(c)
            } else {
                readingNumerator = true
                fractions.push({ numerator: numerator * sign, denominator })
                commonDenominator = lcm(commonDenominator, denominator)
                numerator = 0
                sign = (c == '+') ? 1 : -1
            }
        }
    }
    fractions.push({ numerator: numerator * sign, denominator })
    commonDenominator = lcm(commonDenominator, denominator)
    let res = 0
    const handleFractions = (fraction) => {
        const mult = commonDenominator / fraction.denominator
        res += (mult * fraction.numerator)
    }
    fractions.map(handleFractions)
    let resSimplifier = Math.abs(gcd(res, commonDenominator))
    res /= resSimplifier
    const resDenominator = commonDenominator / resSimplifier
    return `${res}/${resDenominator}`
};
