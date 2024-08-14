var maximumWealth = function(accounts) {
    let ac= accounts.map((value)=>value.reduce((acc,v)=>acc+v))
   return Math.max(...ac)
};
