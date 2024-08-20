var countPrimes = function (n) {
    if (n <= 2) return 0
    let integers = new Array(n).fill(true)
    let limit = Math.sqrt(n)
    for (let prime = 2; prime <= limit; prime++) {
        if (integers[prime]) {
            for (let multiple = prime * prime; multiple < n; multiple += prime) {
                integers[multiple] = false
            }
        }
    }
    let primeCount = 0
    for (let num = 2; num < n; num++) {
        if(integers[num]) {
            primeCount++
        }
    }
    return primeCount
};
