/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    let gidWeight = new Map()
    const find = (nodeId) => {
        if (!gidWeight.has(nodeId)) gidWeight.set(nodeId, { gid: nodeId, weight: 1.0 })
        const entry = gidWeight.get(nodeId)
        if (entry.gid !== nodeId) {
            const newEntry = find(entry.gid)
            gidWeight.set(nodeId, { gid: newEntry.gid, weight: entry.weight * newEntry.weight })
        }
        return gidWeight.get(nodeId)
    }
    const union = (dividendKey, divisorKey, weight) => {
        const dividend = find(dividendKey)
        const divisor = find(divisorKey)
        if (dividend.gid !== divisor.gid) {
            const newWeight = divisor.weight * weight / dividend.weight
            gidWeight.set(dividend.gid, { gid: divisor.gid, weight: newWeight })
        }
    }
    const nE = equations.length, nQ = queries.length
    for (let i = 0; i < nE; i++) {
        const equation = equations[i]
        const dividendKey = equation[0], divisorKey = equation[1]
        const quotient = values[i]
        union(dividendKey, divisorKey, quotient)
    }
    let results = new Array(nQ)
    for (let i = 0; i < nQ; i++) {
        const query = queries[i]
        const dividendKey = query[0], divisorKey = query[1]
        if (!gidWeight.has(dividendKey) || !gidWeight.has(divisorKey)) {
            results[i] = -1
        } else {
            const dividend = find(dividendKey)
            const divisor = find(divisorKey)
            if (dividend.gid == divisor.gid) {
                results[i] = dividend.weight / divisor.weight
            } else {
                results[i] = -1
            }
        }
    }
    return results
};
