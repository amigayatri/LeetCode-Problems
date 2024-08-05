/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const n = asteroids.length
    let st = []
    for (let asteroid of asteroids) {
        let addToStack = true
        while(st.length > 0 && (st[st.length-1] > 0 && asteroid < 0)) {
            const absAsteroid = Math.abs(asteroid)
            const absTop = Math.abs(st[st.length-1])
            if(absTop < absAsteroid) {
                st.pop()
                continue
            } else if (absTop == absAsteroid) {
                st.pop()
            }
            addToStack = false
            break
        }
        if (addToStack) st.push(asteroid)
    }
    return st
};
