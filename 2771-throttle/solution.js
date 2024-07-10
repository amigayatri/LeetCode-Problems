/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
    let onWait = false, hasCall = false
    let storedArgs = []
    const call = (args) => {
        onWait = true
        fn(...args)
        setTimeout(()=>{
            onWait = false
            if (hasCall) {
                call(storedArgs)
                hasCall = false
            }
        }, t)
    } 
    return function(...args) {
        if(!onWait) {
            call(args)
        } else {
            storedArgs = args
            hasCall = true
        }
    }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
