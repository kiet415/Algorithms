/**
 * 16. 3Sum Closest

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.
 */

var threeSumClosest = function(nums, target) {
    let res = Infinity;
    let closest = Infinity;
    let sorted = nums.sort((a,b) => a-b);
    for(let i = 0; i < sorted.length; i++) {
        let l = i+1;
        let r = sorted.length-1;
        while(l < r) {
            let sum = sorted[i] + sorted[l] + sorted[r];
            if(closest > Math.abs(sum - target)) {
                closest = Math.abs(sum - target);
                res = sum;
            }
            if(sum < target) {
                l++;
            } else {
                r--;
            }
        }
    }
    return res;
};