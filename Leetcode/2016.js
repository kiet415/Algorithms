/**
 * 2016. Maximum Difference Between Increasing Elements

Given a 0-indexed integer array nums of size n, find the maximum difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]), such that 0 <= i < j < n and nums[i] < nums[j].

Return the maximum difference. If no such i and j exists, return -1.
 */

var maximumDifference = function(nums) {
    let maxDiff = -1;
    let smallest = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] <= smallest) {
            smallest = nums[i]
        } else {
            maxDiff = Math.max(maxDiff,nums[i] - smallest);
        }
        
    }
    
    
    return maxDiff;
};