/**
 *2006. Count Number of Pairs With Absolute Difference K
Easy

Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

The value of |x| is defined as:

x if x >= 0.
-x if x < 0.
 */


var countKDifference = function(nums, k) {
    let hash = {};
    let res = 0;
    for(let i = 0; i < nums.length; i++) {
        if(hash[nums[i]]) {
            hash[nums[i]] +=1;
        } else {
            hash[nums[i]] = 1;
        }
    }
    for(let i = 0; i < nums.length; i++) {
        let diff = nums[i]-k;
       
        if(hash[diff]) res+=hash[diff]

    }
    return res;
};