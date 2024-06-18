/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    let n = hand.length
    if (n % groupSize != 0) return false
    let cardsFrequency = new Map()
    let heap = new MinPriorityQueue()
    for (let card of hand) {
        if (cardsFrequency.has(card)) {
            const oldFrequency = cardsFrequency.get(card)
            cardsFrequency.set(card, oldFrequency+1)
        } else {
            cardsFrequency.set(card, 1)
        }
    }

    let groupStartQueue = []
    let lastCard = - 1, currentOpen = 0
    for (let [card, frequency] of cardsFrequency) {
        heap.enqueue(frequency, card)
    }
    cardsFrequency.clear()
    heap.toArray().forEach((value) => cardsFrequency.set(value.priority, value.element))
    for (let [card, frequency] of cardsFrequency) {
        if ((currentOpen > 0 && card > lastCard + 1) || currentOpen > frequency) return false
        groupStartQueue.push(frequency - currentOpen)
        lastCard = card
        currentOpen = frequency
        if (groupStartQueue.length == groupSize) {
            currentOpen -= groupStartQueue.shift()
        }
    }
    return currentOpen == 0
};
