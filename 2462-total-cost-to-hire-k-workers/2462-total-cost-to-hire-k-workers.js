/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {

    class MinHeap {
        constructor(){ this.heap=[]; }

        push(val){
            this.heap.push(val);
            let i=this.heap.length-1;
            while(i>0){
                let p=Math.floor((i-1)/2);
                if(this.heap[p]<=this.heap[i]) break;
                [this.heap[p],this.heap[i]]=[this.heap[i],this.heap[p]];
                i=p;
            }
        }

        pop(){
            if(this.heap.length===1) return this.heap.pop();
            let top=this.heap[0];
            this.heap[0]=this.heap.pop();
            let i=0;

            while(true){
                let l=2*i+1,r=2*i+2,small=i;

                if(l<this.heap.length && this.heap[l]<this.heap[small]) small=l;
                if(r<this.heap.length && this.heap[r]<this.heap[small]) small=r;
                if(small===i) break;

                [this.heap[i],this.heap[small]]=[this.heap[small],this.heap[i]];
                i=small;
            }

            return top;
        }

        peek(){ return this.heap[0] ?? Infinity; }

        size(){ return this.heap.length; }
    }

    let leftHeap = new MinHeap();
    let rightHeap = new MinHeap();

    let l = 0;
    let r = costs.length - 1;

    for(let i=0;i<candidates && l<=r;i++){
        leftHeap.push(costs[l++]);
    }

    for(let i=0;i<candidates && l<=r;i++){
        rightHeap.push(costs[r--]);
    }

    let total = 0;

    for(let i=0;i<k;i++){

        if(leftHeap.peek() <= rightHeap.peek()){
            total += leftHeap.pop();

            if(l <= r){
                leftHeap.push(costs[l++]);
            }
        }else{
            total += rightHeap.pop();

            if(l <= r){
                rightHeap.push(costs[r--]);
            }
        }
    }

    return total;
};