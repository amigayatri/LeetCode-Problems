/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
    if (n == 1) return 0
    let primesArr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]
    const nPrimes = primesArr.length
    const BSCost = Math.log2(nPrimes)
    const linearCost = Math.min(n, nPrimes)
    const primes = new Set()
    if (linearCost < BSCost) {
        const presentPrimes = []
        for (const prime of primesArr) {
            if (prime > n) break
            if (n % prime == 0) presentPrimes.push(prime)
        }
        presentPrimes.reverse()
        for (const prime of presentPrimes) primes.add(prime)
    } else {
        let left = 0, right = linearCost - 1
        while (left < right) {
            const mid = (left + right) >> 1
            if (primesArr[mid] <= n) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        for (let i = right; i >= 0; i--) {
            if (n % primesArr[i] == 0) primes.add(primesArr[i])
        }
    }
    if (primes.has(n)) return n
    let num = n
    let steps = 0
    const baseLog = (base, el) => Math.log(el) / Math.log(base)
    const getPrimeFactor = (num, prime) => {
        const log = Math.trunc(baseLog(prime, num) + 0.1)
        const logPower = Math.pow(prime, log)
        let left = 1, right = logPower*prime
        let leftLog = 0, rightLog = log+1
        while (leftLog <= rightLog) {
            if (num % right == 0) {
                leftLog = rightLog
                left = right
                break
            } else {
                right /= prime
                rightLog--
            }
            if (num % (left*prime) == 0) {
                leftLog++
                left*=prime
            } else {
                break
            }
            if (left == right) continue
            const midPow = (right / left)
            if (midPow <= left) continue
            const midLog = rightLog-leftLog
            if (num % midPow == 0) {
                left = Math.max(left, midPow)
                leftLog = Math.max(leftLog, midLog)
            } else {
                right = Math.min(midPow/prime, right)
                rightLog = Math.min(midLog-1, rightLog)
            }
        }
        n /= left
        return leftLog
    }
    for (let prime of primes) {
        const factor = getPrimeFactor(n, prime)
        steps += prime*factor
    }
    return steps
};
