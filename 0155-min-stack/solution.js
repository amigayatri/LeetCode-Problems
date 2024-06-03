
var MinStack = function() {
        this.stack=[];
       this.mstack=[];
       this.ptr=-1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.ptr==-1){
        this.mstack[0]=this.stack[0]=val;
        this.ptr++;
    }

    else {
        if(this.mstack[this.ptr]>val){
            this.mstack[this.ptr+1]=val;
        }
        else{
           this.mstack[this.ptr+1]=this.mstack[this.ptr];  
        }
       
        this.stack[this.ptr+1]=val;
        this.ptr++;
        }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
        this.ptr--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    
        return this.stack[this.ptr];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
      
        return  this.mstack[this.ptr];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

 //Optimal solution with O(N) SC.
