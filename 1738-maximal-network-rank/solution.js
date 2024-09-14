/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
    const map = new Map()
    const connect = (city1, city2) => {
        !map.has(city1) && map.set(city1, new Set())
        !map.has(city2) && map.set(city2, new Set())
        map.get(city1).add(city2)
        map.get(city2).add(city1)
    }
    for (const [city1, city2] of roads) {
        connect(city1, city2)
    }
    const getRank = (city1, city2) => {
        const roads1 = map.has(city1) ? map.get(city1) : new Set()
        const roads2 = map.has(city2) ? map.get(city2) : new Set()
        let currRank = roads1.size + roads2.size
        if (roads1.has(city2)) {
            currRank--
        }
        return currRank
    }
    let maxRank = Number.MIN_SAFE_INTEGER
    for (let city1 = 0; city1 < n; city1 ++) {
        for (let city2 = city1+1; city2 < n; city2++) {
            const currRank = getRank(city1, city2)
            if (currRank > maxRank) maxRank = currRank
        }
    }
    return maxRank
};
