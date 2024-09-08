function getIndex(reader) {
    let left = 0, size = reader.length()
    let compare = (left, size) => {
        const last = size - 1, x = left + size
        return reader.compareSub(left, left + last, x, x + last)
    }
    while (size > 1) {
        size >>= 1
        const cpm = compare(left, size)
        if (cpm == 0) {
            return left + 2*size
        } else if (cpm == -1) {
            left += size
        }
    }
    return left
};
