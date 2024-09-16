const guessMajority = function(reader) {
    const n = reader.length()
    let cntEqual = 1, cntDiff = 0, indexDiff = -1
    const f = (isEqual, i) => {
        if (isEqual) {
            cntEqual++
        } else {
            cntDiff++
            indexDiff = i
        }
    }
    const query0123 = reader.query(0, 1, 2, 3), query1234 = reader.query(1, 2, 3, 4)
    f(query0123 === query1234, 4)
    for (let i = 5; i < n; i++) {
        f(reader.query(1, 2, 3, i) === query0123, i)
    }
    f(reader.query(0, 2, 3, 4) === query1234, 1)
    f(reader.query(0, 1, 3, 4) === query1234, 2)
    f(reader.query(0, 1, 2, 4) === query1234, 3)
    return cntEqual > cntDiff ? 0 : cntDiff > cntEqual? indexDiff : -1
};
