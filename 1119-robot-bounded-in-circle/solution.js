/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
    let pos = [0, 0], dir = 'N'
    const dirVec = {
        'N': [0, 1],
        'S': [0, -1],
        'E': [1, 0],
        'W': [-1, 0]
    }
    const rotLMap = { 'N': 'W', 'W': 'S', 'S': 'E', 'E': 'N'}
    const rotRMap = { 'N': 'E', 'E': 'S', 'S': 'W', 'W': 'N'}
    const rotLeft = () => dir = rotLMap[dir]
    const rotRight = () => dir = rotRMap[dir]
    const walk = () => {
        const [xDir, yDir] = dirVec[dir]
        pos = [pos[0]+(1*xDir), pos[1] +(1*yDir)]
    }
    const instMap = {
        'G': walk,
        'L': rotLeft,
        'R': rotRight
    }

    for (let inst of instructions) {
        const instFn = instMap[inst]
        instFn()
    }
    if (dir != 'N') return true
    if (pos[0] == 0 && pos[1]==0) return true
    return false
};
