/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let circleCount = 0, squareCount = 0
    for(let s of students){
        if (s == 0) circleCount++
        else squareCount++
    }
    for (let s of sandwiches) {
        if (circleCount == 0 && s == 0) return squareCount
        if (squareCount == 0 && s == 1) return circleCount
        if (s == 0) {
            circleCount--
        } else {
            squareCount--
        }
    }
    return 0
};
