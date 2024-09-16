const killProcess = function(pid, ppid, kill) {
    const n = pid.length, map = new Map()
    for (let i = 0; i < n; i++) {
        if (ppid[i] > 0) {
            map.set(ppid[i], (map.get(ppid[i]) || new Set()).add(pid[i]))
        }
    }
    const res = [kill]
    const getAllChildren = (idToKill) => {
        if (map.has(idToKill)) {
            for (const childId of map.get(idToKill)) {
                res.push(childId)
                getAllChildren(childId)
            }
        }
    }
    getAllChildren(kill)
    return res
};
