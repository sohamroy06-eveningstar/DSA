/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   if(nums.length === 0) return 0;

      let slow = 0;
       
       nums.forEach((num,fast) => {
        if(fast === 0) return;
         if(nums[slow] !== num) {
            slow++;
            nums[slow] = num;
         }
       })
       return slow + 1;
};