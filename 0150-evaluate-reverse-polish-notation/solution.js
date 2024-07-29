var evalRPN = function (tokens) {
    const opMap = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => Math.trunc(x / y)
    }
    let pos = 0
    while (tokens.length > 1) {
        while (!(tokens[pos] in opMap)) pos++
        const op = opMap[tokens[pos]]
        const x = Number(tokens[pos-2])
        const y = Number(tokens[pos-1])
        tokens[pos] = op(x, y)
        tokens.splice(pos-2, 2)
        pos--
    }
    return tokens[0]
};
