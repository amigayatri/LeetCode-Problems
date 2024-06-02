/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let mapping = {'[' : ']', '{': '}', '(':')'}
    if (s.length % 2 !== 0)
        return false
    for (let symbol of s) {
        if (mapping[symbol]) {
            stack.push(mapping[symbol])
        } else {
            if(stack[stack.length-1] !== symbol) 
                return false
            else 
                stack.pop()
        }
    }
    return stack.length === 0
};
