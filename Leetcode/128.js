/**
 * 128. Longest Consecutive Sequence

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
 */


 var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let res = 0;
    //console.log(set)
    for(let i = 0; i < nums.length; i++) {
        if(!set.has(nums[i]-1)) {
            let next = nums[i]+1;
            
            while(set.has(next)) {
                next++;
                
            }
            res = Math.max(res, next - nums[i]);
        }
    }
    return res;
};