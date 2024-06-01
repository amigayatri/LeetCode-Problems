/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let foundList = new Set();
    
    for( let i=0; i < nums.length ; i++){ 
        let currentNum = nums[i];
      if(foundList.has(currentNum)){
          return true
      } else {
          foundList.add(currentNum)
      }
    }
    return false;
    
};
