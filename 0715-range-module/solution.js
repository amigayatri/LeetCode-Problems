var RangeModule = function() {
    this.ranges = []
};


RangeModule.prototype.bisect_left = function(arr, num){
    var low = 0, high = arr.length;
    while (low < high) {
        var mid = (low + high) >>> 1;
        if (arr[mid] < num) low = mid + 1;
        else high = mid;
    }
    return low;
};

RangeModule.prototype.bisect_right = function(arr, num) {
    var low = 0, high = arr.length;
    while (low < high) {
        var mid = (low + high) >>> 1;
        if (arr[mid] <= num) low = mid + 1;
		else high = mid;
    }
    return low;
};


RangeModule.prototype.addRange = function(left, right) {
    let l = this.bisect_left(this.ranges, left);
    let r = this.bisect_right(this.ranges, right);
    
    let sub_range = []
    if (l % 2 == 0) sub_range.push(left);
    if (r % 2 == 0) sub_range.push(right);

    this.ranges.splice(l, r - l, ...sub_range)
};


RangeModule.prototype.removeRange = function(left, right) {
    let l = this.bisect_left(this.ranges, left);
    let r = this.bisect_right(this.ranges, right);
    
    let sub_range = []
    if (l % 2 == 1) sub_range.push(left);
    if (r % 2 == 1) sub_range.push(right);
    
    this.ranges.splice(l, r - l, ...sub_range)
};


RangeModule.prototype.queryRange = function(left, right) {
    let l = this.bisect_right(this.ranges, left);
    let r = this.bisect_left(this.ranges, right);
    return l == r && l % 2 == 1
}
