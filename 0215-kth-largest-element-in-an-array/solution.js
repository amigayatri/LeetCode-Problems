var findKthLargest = function(nums, k) {
    let heap = new MinPriorityQueue()
    for (let number of nums) {
        if(heap.size() < k) heap.enqueue(number)
        else if (number > heap.front().priority){
            heap.dequeue()
            heap.enqueue(number)
        }
    }
    return heap.front().element
};
