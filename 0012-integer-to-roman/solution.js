/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let dict = new Map([
        [1,    'I'],
        [5,    'V'],
       [10,    'X'],
       [50,    'L'],
      [100,    'C'],
      [500,    'D'],
     [1000,    'M']]
    )
    let roman = ''
    let powerOf10 = 3
    while (powerOf10 >= 0) {
        const powerOf10Value = Math.pow(10, powerOf10)
        const single = dict.get(powerOf10Value)
        let localValue = Math.floor(num/powerOf10Value)
        if (localValue == 9) {
            const pos = dict.get(powerOf10Value*10)
            roman += single + pos
            localValue = 0
        } else if (localValue >= 5) {
            const val = dict.get(powerOf10Value*5)
            roman += val
            localValue -= 5
        } else if (localValue == 4) {
            const pos = dict.get(powerOf10Value*5)
            roman += single+pos
            localValue = 0
        }
        while (localValue > 0) {
            roman += single
            localValue--
        }
        num = num % powerOf10Value
        powerOf10--
    }
    return roman
};
