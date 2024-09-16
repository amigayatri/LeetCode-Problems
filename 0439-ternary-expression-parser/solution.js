const parseTernary = function(expression) {
    const solve = (exp, i, j) => {
        if (i == j) return exp.substring(i, i+1)
        let questionMarkIdx = i
        while (exp.charAt(questionMarkIdx) != '?') questionMarkIdx++
        let aheadColonIdx = questionMarkIdx+1
        let count = 1
        while (count != 0) {
            if (exp.charAt(aheadColonIdx) == '?') {
                count++
            } else if (exp.charAt(aheadColonIdx) == ':') {
                count--
            }
            aheadColonIdx++
        }
        if (exp.charAt(i) == 'T') {
            return solve(exp, questionMarkIdx+1, aheadColonIdx-2)
        } else {
            return solve(exp, aheadColonIdx, j)
        }
    }
    return solve(expression, 0, expression.length-1)
};
