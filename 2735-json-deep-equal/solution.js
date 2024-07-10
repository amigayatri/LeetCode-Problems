const helper = (key, value) => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
        const sortedEntries = Object.entries(value).sort()
        return Object.fromEntries(sortedEntries)
    } else 
        return value
}
var areDeeplyEqual = function (o1, o2) {
    const stringO1 = JSON.stringify(o1, helper)
    const stringO2 = JSON.stringify(o2, helper)
    return stringO1 === stringO2
};
