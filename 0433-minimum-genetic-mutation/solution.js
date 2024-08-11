var minMutation = function (start, end, bank) {
    const diff = (a, b) => {
        let count = 0
        for (let i = 0; i < 8; i++) {
            if (a[i] !== b[i]) count++
        }
        return count
    }
    const q = new Queue()
    const seen = new Set()
    seen.add(start)
    q.push([start, 0])
    while (!q.isEmpty()) {
        const [curr, steps] = q.pop()
        if (curr === end) return steps
        for (const gene of bank) {
            if (diff(curr, gene) === 1 && !seen.has(gene)) {
                seen.add(gene)
                q.push([gene, steps + 1])
            }
        }
    }
    return -1
}
