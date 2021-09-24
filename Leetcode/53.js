/**
 * 53. Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.
 */

var maxSubArray = function(nums) {
    //let sum = nums[0];
    //iterate through array starting at index 1 
    //keep track of currSum, maxSum
    //maxSum = Math.max(currSum, maxSum)
    let currSum = nums[0];
    let maxSum = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > currSum && currSum < 0) {
            currSum = nums[i];
        } else {
            currSum += nums[i];
        }
        
        maxSum = Math.max(currSum, maxSum);
    }
    
    
    return maxSum;
};