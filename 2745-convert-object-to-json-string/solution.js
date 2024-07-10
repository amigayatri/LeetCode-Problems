const primitiveStringify = (primitive) => {
    return String(primitive)
}
const arrayStringify = (array) => {
    const n = array.length
    let res = '['
    for (let i = 0; i < n; i++) {
        res += jsonStringify(array[i]) + (i < n - 1 ? ',' : '')
    }
    return res + ']'
}
const objectStringify = (object) => {
    if (object === null) return String(object)
    let res = '{'
    let i = 0
    const n = Object.entries(object).length
    for (let [key, value] of Object.entries(object)) {
        res += `"${key}":${jsonStringify(value) + (i < n - 1 ? ',' : '')}`
        i++
    }
    return res + '}'
}
var jsonStringify = function (object) {
    if (typeof object === 'string') return '"' + object + '"'
    if (typeof object === 'object') {
        if (Array.isArray(object)) {
            return arrayStringify(object)
        }
        return objectStringify(object)
    }
    return primitiveStringify(object)
};
