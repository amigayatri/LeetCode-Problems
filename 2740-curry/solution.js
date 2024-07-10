/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn, par = []) {
    let exPar = fn.length
    return function curried(...args) {
        par.push(...args)
        if (exPar <= par.length) {
            return fn(...par)
        } else {
            return curry(fn, par)
        }
    }
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */

