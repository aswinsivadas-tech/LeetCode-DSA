/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

    let heap = [];

    const heapifyUp = (i) => {
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (heap[parent] <= heap[i]) break;
            [heap[parent], heap[i]] = [heap[i], heap[parent]];
            i = parent;
        }
    };

    const heapifyDown = (i) => {
        let n = heap.length;

        while (true) {
            let smallest = i;
            let left = 2 * i + 1;
            let right = 2 * i + 2;

            if (left < n && heap[left] < heap[smallest]) smallest = left;
            if (right < n && heap[right] < heap[smallest]) smallest = right;

            if (smallest === i) break;

            [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
            i = smallest;
        }
    };

    for (let num of nums) {
        heap.push(num);
        heapifyUp(heap.length - 1);

        if (heap.length > k) {
            heap[0] = heap.pop();
            heapifyDown(0);
        }
    }

    return heap[0];
};