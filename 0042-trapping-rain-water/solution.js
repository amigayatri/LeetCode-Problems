const trap = function (height) {
    let l = 0; //2
    let r = height.length - 1; //3
    let maxL = height[l]; //1
    let maxR = height[r]; //2
    let water = 0;

    while (l < r) {
        if (maxL < maxR) {
            l++;
            if (height[l] < maxL) {
                water += maxL - height[l];
            } else {
                maxL = height[l];
            }
        } else {
            r--;
            if (height[r] < maxR) {
                water += maxR - height[r];
            } else {
                maxR = height[r];
            }
        }
    }

    return water;
}
