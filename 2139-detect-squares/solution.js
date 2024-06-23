
class DetectSquares {
    constructor() {
        this.pointsByX = new Map()
    }

    setPoint(x, y) {
        if (!this.pointsByX.has(x)) this.pointsByX.set(x, new Map())
        let pointsAtX = this.pointsByX.get(x)
        if (!pointsAtX.has(y)) pointsAtX.set(y, 0)
        let count = pointsAtX.get(y)
        pointsAtX.set(y, count + 1)
        this.pointsByX.set(x, pointsAtX)
    }

    add(point) {
        const x = point[0], y = point[1]
        this.setPoint(x, y)
    }
    count(point) {
        const x = point[0], y = point[1]
        let pointsAtX = this.pointsByX.get(x)
        if (pointsAtX == undefined) return 0
        const sizeMod = [1, -1]
        const checkSquare = (x, y, y2) => {
            const size = Math.abs(y - y2)
            if (size == 0) return 0
            let result = 0
            for (let mod of sizeMod) {
                const possibleX = x + size * mod
                const mapPossibleX = this.pointsByX.get(possibleX)
                if (mapPossibleX != undefined) {
                    if (mapPossibleX.has(y) && mapPossibleX.has(y2)) {
                        const count = mapPossibleX.get(y) * mapPossibleX.get(y2)
                        result += count
                    }
                }
            }
            return result
        }
        let result = 0
        for (let [y2, count] of pointsAtX) {
            result += checkSquare(x, y, y2) * count
        }
        return result
    }
};
