Array.prototype.peek = function (){
    return this[this.length-1]
}
Array.prototype.isEmpty = function (){
    return this.length == 0
}
var calPoints = function(operations) {
    let opStack = []
    const discard = () => opStack.pop()
    const double = () => opStack.push(opStack.peek()*2)
    const sumPrev = () => {
        const top = opStack.pop()
        const sum = opStack.peek()+top
        opStack.push(top)
        opStack.push(sum)
    }
    const opSet = new Set(['C', 'D', '+'])
    const applyOp = (op) => {
        if (op === 'C') discard()
        else if(op === 'D') double()
        else sumPrev()
    }
    for (const op of operations) {
        if (opSet.has(op)) {
            applyOp(op)
        } else {
            opStack.push(Number(op))
        }
    }
    let sum = 0
    console.log(opStack)
    while (!opStack.isEmpty()) {
        sum += opStack.pop()
    }
    return sum
};
