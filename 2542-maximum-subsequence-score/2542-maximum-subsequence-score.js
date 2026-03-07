/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {

    class Heap {
        constructor() {
            this.heap = [];
        }

        push(val){
            this.heap.push(val);
            let i = this.heap.length - 1;

            while(i > 0){
                let p = Math.floor((i-1)/2);
                if(this.heap[p] <= this.heap[i]) break;
                [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
                i = p;
            }
        }

        pop(){
            if(this.heap.length === 1) return this.heap.pop();

            let top = this.heap[0];
            this.heap[0] = this.heap.pop();
            let i = 0;

            while(true){
                let l = 2*i + 1;
                let r = 2*i + 2;
                let smallest = i;

                if(l < this.heap.length && this.heap[l] < this.heap[smallest])
                    smallest = l;

                if(r < this.heap.length && this.heap[r] < this.heap[smallest])
                    smallest = r;

                if(smallest === i) break;

                [this.heap[i], this.heap[smallest]] =
                [this.heap[smallest], this.heap[i]];

                i = smallest;
            }

            return top;
        }

        size(){
            return this.heap.length;
        }
    }

    let pairs = [];

    for(let i=0;i<nums1.length;i++){
        pairs.push([nums2[i], nums1[i]]);
    }

    pairs.sort((a,b)=>b[0]-a[0]);

    let heap = new Heap();
    let sum = 0;
    let res = 0;

    for(let [n2,n1] of pairs){

        heap.push(n1);
        sum += n1;

        if(heap.size() > k){
            sum -= heap.pop();
        }

        if(heap.size() === k){
            res = Math.max(res, sum * n2);
        }
    }

    return res;
};