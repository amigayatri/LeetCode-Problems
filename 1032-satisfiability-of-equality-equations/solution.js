var equationsPossible = function(equations) {
    const size = 26
    const root = Array.from({length: size}, (_, i)=>i)
    const find = (x) => {
        if (root[x] != x) {
            root[x] = find(root[x])
        }
        return root[x]
    }
    const union = (x, y) => {
        x = find(x)
        y = find(y)
        if (x != y) {
            root[x] = y
        }
    }
    for (const equation of equations) {
        if (equation.charAt(1) == '=') {
            const x = equation.charCodeAt(0) - 'a'.charCodeAt(0)
            const y = equation.charCodeAt(3) - 'a'.charCodeAt(0)
            union(x, y)
        }
    }
    for (const equation of equations) {
        if (equation.charAt(1) == '!') {
            const x = equation.charCodeAt(0) - 'a'.charCodeAt(0)
            const y = equation.charCodeAt(3) - 'a'.charCodeAt(0)
            if (find(x) == find(y)) {
                return false
            }
        }
    }
    return true
};
