/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    let n = functions.length
    return new Promise(async (resolve, reject) => {
        if (n === 0) {
            resolve([])
            return
        } 
        const res = new Array(n).fill(null)
        let resolvedCount = 0
        functions.forEach( async (fn, i) => {
            try {
                const subResult = await fn()
                res[i] = subResult
                resolvedCount++
                if (resolvedCount === n) resolve(res)
            } catch (err) {
                reject(err)
            }
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
