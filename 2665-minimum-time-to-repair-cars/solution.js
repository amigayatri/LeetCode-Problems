/**
* @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function(ranks, cars) {
    ranks = ranks.sort((a,b)=>a-b);
    //we can do it without sorting but we will have a bigger starting range 
    
    let lo = 0;
    let hi = cars*cars*ranks[0];
//ranks[0] is the least rank in case of sorting else is a random one to set our range
    let minTime;
    let total = 0;

    while(lo<hi){
        minTime = Math.floor((lo+hi)/2)
        total = 0;
        for(let i =0;i<ranks.length;i++){
// the formula is time = therank * numberOfCarsRepaired * numberOfCarsRepaired
//a simple criss cross will get us to numberOfCarsRepaired = sqrt(minTime/ranks[i])
            total+= Math.floor(Math.sqrt(Math.floor(minTime/ranks[i])))
        }
        if(total>=cars){
            hi = minTime
        }else{
            lo = minTime +1
        }
    }
    return lo
}

