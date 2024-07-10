/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    const compactArray = (arr) => {
        let res = []
        for (let val of arr) {
            if (val) {
                if (Array.isArray(val)) {
                    res.push(compactArray(val))
                } else if (typeof (val) === "object") {
                    res.push(compactObj(val))
                } else {
                    res.push(val)
                }
            }
        }
        return res
    }
    const compactObj = (obj) => {
        let res = {}
        for (let [key, value] of Object.entries(obj)) {
            if (Boolean(value)) {
                if (Array.isArray(value)) {
                    res[key] = compactArray(value)
                } else if (typeof (value) === "object") {
                    res[key] = compactObj(value)
                } else {
                    res[key] = value
                }
            }
        }
        return res
    }
    if (Array.isArray(obj)) return compactArray(obj)
    return compactObj(obj)
};
