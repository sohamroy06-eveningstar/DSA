/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
let k = Math.min(2, nums.length);

 for (let i = 2; i < nums.length; i++) {

    if( k < 2 || nums[i] !== nums[k-2]) {

        nums[k] = nums[i]
        k++;
    }

 }

 return k;
 
};