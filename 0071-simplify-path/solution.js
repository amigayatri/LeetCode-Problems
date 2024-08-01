/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let stack = []
    for (let sub of path.split('/')) {
        if (sub == '.' || !sub.length ) continue
        else if (sub == '..') {
            if (stack.length) stack.pop()
        } else stack.push(sub)
    }
    return '/' + stack.join('/')
};
