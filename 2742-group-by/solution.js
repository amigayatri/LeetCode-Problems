/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let groups = {}
    for (let el of this) {
        const key = fn(el)
        if (groups[key] == undefined) groups[key] = []
        groups[key].push(el)
    }
    return groups
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
