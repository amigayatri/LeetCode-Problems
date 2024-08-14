/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0, y = 0
    let directionsMoves = {
        'U':()=>y++, 'D':()=>y--, 'L': ()=>x--, 'R': ()=>x++
    }
    for (let move of moves) {
        directionsMoves[move]()
    }
    return x == 0 && y == 0
};
