/**
 * 1979. Find Greatest Common Divisor of Array

Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers. */

var findGCD = function(nums) {
    let sortedArr = nums.sort(sorted);
    let ctr = sortedArr[0];
    let smallest = sortedArr[0];
    let biggest = sortedArr[sortedArr.length-1];
    while(ctr > 0) {
        
        if(smallest % ctr === 0 && biggest % ctr === 0) return ctr;
        ctr--;
    }
    return 1;
};

function sorted(a,b) {
    return a-b;
}