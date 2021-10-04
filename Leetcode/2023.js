/**
 * 2023. Number of Pairs of Strings With Concatenation Equal to Target

Given an array of digit strings nums and a digit string target, return the number of pairs of indices (i, j) (where i != j) such that the concatenation of nums[i] + nums[j] equals target.
 */

var numOfPairs = function(nums, target) {
    let hash = {};
    let res = 0;
    for(let i = 0; i < nums.length; i++) {
        hash[nums[i]] ? hash[nums[i]] +=1 : hash[nums[i]] = 1;
    }
    //console.log(hash)
    for(let i = 0; i < nums.length; i++) {
        if(target.indexOf(nums[i]) === 0) {
            let tar = target.slice(nums[i].length);
            //console.log(tar, hash[tar])
            if(tar !== nums[i] && hash[tar]) {
                res+=hash[tar];
            } else if(tar === nums[i] && hash[tar] > 1) {
                res+=hash[tar]-1;
            }
        }
    }
    
    
    return res;
};