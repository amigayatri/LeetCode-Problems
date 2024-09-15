/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function (strings) {
    const groups = new Map()
    for (const str of strings) {
        const seq = [];

        for (let i = 1; i < str.length; i++) {
            let jump = str.charCodeAt(i) - str.charCodeAt(i - 1);
            if (jump < 0) jump += 26;
            seq.push(jump);
        }

        const key = seq.join();
        !groups.has(key) && groups.set(key, [])
        groups.get(key).push(str)
    }

    return [...groups.values()]
};
