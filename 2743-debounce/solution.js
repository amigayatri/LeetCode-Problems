/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    let timeoutId = false
    return function (...args) {
        if (timeoutId !== false) clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            fn(...args)
            timeoutId = false
        }, t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
