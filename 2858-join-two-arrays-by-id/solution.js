/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    let groupedIds = {}
    for (let el of arr1) {
        let key = el.id
        groupedIds[key] = el
    }
    const joinObjects = (id, el) => {
        for (let [key, value] of Object.entries(el)) {
            groupedIds[id][key] = value
        }
    }
    for (let el of arr2) {
        let key = el.id
        if (groupedIds[key] !== undefined) joinObjects(key, el)
        else groupedIds[key] = el
    }
    return Object.values(groupedIds)
};
