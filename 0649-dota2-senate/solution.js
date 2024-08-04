/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
    const n = senate.length
    let arr = senate.split('')
    let bans = {'R': 0, 'D': 0}
    let has = {'R': true, 'D' : true}
    const oponent = {'R': 'D', 'D': 'R'}
    const winner = {'R': 'Radiant', 'D': 'Dire'}
    while (has['R'] && has['D']) {
        has['R'] = false
        has['D'] = false
        for (let i = 0; i < n; i++) {
            const s = arr[i]
            if (!(s in has)) continue
            if (bans[s] > 0) {
                bans[s]--
                arr[i] = 'b'
            } else {
                has[s] = true
                bans[oponent[s]]++
            }
        }
    }
    return has['R'] ? winner['R'] : winner[oponent['R']]
};
