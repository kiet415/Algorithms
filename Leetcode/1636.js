/**
 * 1636. Sort Array by Increasing Frequency
Easy

Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

Return the sorted array.

 
 */

var frequencySort = function(nums) {
    let hash = {};
    let res = [];
    nums.forEach(num => {
        hash[num] ? hash[num] +=1 : hash[num] = 1;   
    })
    let keys = Object.keys(hash);
    let sortedNums = keys.sort((a,b) => (hash[a] - hash[b]) || (b-a))
    //console.log(sortedNums)
    sortedNums.forEach(num => {
        while(hash[num]) {
            res.push(num);
            hash[num]--;
        }
    })
    return res;
};

