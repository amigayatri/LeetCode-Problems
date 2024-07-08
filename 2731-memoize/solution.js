/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let callCount = 0
    let map = new Map()
    return (...args) => {
        const key = args.length > 1? `${args[0]}-${args[1]}` : args[0]
        if (!map.has(key)) {
            let result = fn(...args)
            callCount++
            map.set(key, result)
            return result
        } else {
            return map.get(key)
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
