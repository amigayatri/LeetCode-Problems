/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
     if (points.length <= 2) return points.length;

    const map = new Map();
    let result = 0;

    for (let i = 0; i < points.length; i++) {
        const [x0, y0] = points[i];

        for (let j = i + 1; j < points.length; j++) {
            const [x1, y1] = points[j];

            let m;

            if (x0 === x1) {
                m = Number.MAX_VALUE;
            } else if (y0 === y1) {
                m = 0;
            } else {
                m = (y0 - y1) / (x0 - x1);
            }
            const nextM = map.has(m) ? map.get(m) + 1 : 2;
            map.set(m, nextM);
            result = Math.max(result, nextM);
        }
        map.clear();
        
    }

    return result;
};
