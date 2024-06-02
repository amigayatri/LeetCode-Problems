/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
  // we'll need something to reference that maps unique x's to their unique y's
  const map = new Map();
  for (const [x, y] of points) {
    if (!map.has(x)) map.set(x, new Set());
    map.get(x).add(y)
  }
  
  let min = Infinity;
  
  for (const [x1, y1] of points) {
    for (const [x2, y2] of points) {
      if (x1 < x2 && y1 !== y2 && map.get(x1).has(y2) && map.get(x2).has(y1)) {
        // the current pair of points mark an unvisited diagonal that constitutes a rectangle
        min = Math.min(min, Math.abs((x1 - x2) * (y1 - y2)))
      }
    }
  }
  
  // if we could not form a rectangle with the points given, return 0. otherwise, return min.
  return min === Infinity ? 0 : min;
};
