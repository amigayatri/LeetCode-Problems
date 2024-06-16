class MedianFinder {
    left: number[]; // max heap
    right: number[]; // min heap
    
    constructor() {
        this.left = [];
        this.right = [];   
    }

    addLeft(num: number):void {
        let i = this.left.length;
        while(i > 0){
            const isEven = i % 2 === 0;

            const parentIndex= isEven ? (i-2)/2 : (i-1)/2;
            const parent = this.left[parentIndex];

            if(parent >= num) break;
            
            this.left[i] = parent;
            i = parentIndex;
        }
        this.left[i] = num
    }
   
    addRight(num: number):void {
        let i = this.right.length;
        while(i > 0){
            const isEven = i % 2 === 0;

            const parentIndex= isEven ? (i-2)/2 : (i-1)/2;
            const parent = this.right[parentIndex];

            if(parent <= num) break;
            
            this.right[i] = parent;
            i = parentIndex;
        }

        this.right[i] = num
    }

    popLeft():number{
        const top = this.left[0];
        const min = this.left.pop();

        let i = 0;
        while(i < this.left.length){
            const cli = i*2+1;
            const cri = i*2+2;

            if(cli >= this.left.length && cri >= this.left.length) break;

            const cl = this.left[cli] ?? -Infinity;
            const cr = this.left[cri] ?? -Infinity;

            if(min >= cl && min >= cr) break;
            if(cl >= cr) {
                this.left[i] = cl;
                i = cli;
            } else {
                this.left[i] = cr;
                i = cri;
            }
        }

        this.left[i] = min;
        return top
    }
    
    popRight():number{
        const top = this.right[0];
        const min = this.right.pop();

        let i = 0;
        while(i < this.right.length-1){
            const cli = i*2+1;
            const cri = i*2+2;

            if(cli >= this.right.length && cri >= this.right.length) break;

            const cl = this.right[cli] ?? Infinity;
            const cr = this.right[cri] ?? Infinity;
            
            if(min <= cl && min <= cr) break;
            if(cl <= cr) {
                this.right[i] = cl;
                i = cli;
            } else {
                this.right[i] = cr;
                i = cri;
            }
        }

        this.right[i] = min;

        return top
    }

    addNum(num: number): void {
        const topLeft = this.left[0] ?? -Infinity;
        const topRight = this.right[0] ?? Infinity;

        if(num >= topLeft && num <= topRight){
            if(this.left.length < this.right.length){
                this.addLeft(num)
            } else {
                this.addRight(num)
            }
            return;
        } 

        if(num < topLeft){
            this.addLeft(num);
            if(this.left.length > this.right.length + 1){
                const v = this.popLeft()
                this.addRight(v);
            }
        } else {
            this.addRight(num);
            if(this.right.length > this.left.length + 1){
                const v = this.popRight()
                this.addLeft(v);
            }
        }
    }

    findMedian(): number {
        if(this.left.length === this.right.length) return ((this.left[0] ?? 0) + (this.right[0] ?? 0)) / 2
        if(this.left.length > this.right.length) return this.left[0];
        return this.right[0]
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
