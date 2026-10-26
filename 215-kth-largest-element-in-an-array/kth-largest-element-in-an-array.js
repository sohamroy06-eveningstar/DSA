/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const heap = []

    function shiftUp(index) {
        while(index > 0) {
        const parent = Math.floor((index -1)/2);
        if(heap[parent]<= heap[index]) {
            break;
        }
        [heap[parent],heap[index]] = [heap[index],heap[parent]];
        index = parent;
    }
    }

    function shiftDown (index) {
        while(true) {
            let smallest = index;
            let left = 2 * index +1;
            let right = 2 * index + 2;
            if (left < heap.length && 
            heap[left] < heap[smallest]) {
                smallest = left;
            }
            if(right < heap.length && heap[right] < heap[smallest]) {
                smallest = right;
            }
            if(smallest === index){
                break;
            }
            [heap[index],heap[smallest]] = [heap[smallest],heap[index]];
            index = smallest;

        }

    }

    for (const num of nums){
        if(heap.length < k) {
            heap.push(num);
            shiftUp(heap.length -1);
        }
        else if(num > heap[0]) {
            heap[0] = num;
            shiftDown(0)
        }
    }
    return heap[0];
};