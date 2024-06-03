var dailyTemperatures = function(temperatures) {
    let stack = [];
    let result = []
    for (let i = 0; i < temperatures.length; i++) {
        result.push(0);
    }
    for(let i = temperatures.length -1; i >= 0; i--) {
        while(stack.length > 0 && temperatures[stack[stack.length -1]] <= temperatures[i]) {
            stack.pop();     
        } 
        if(stack.length > 0) {
            result[i] = stack[stack.length -1] - i;
        }
        stack.push(i);

    }
   return result;
};
