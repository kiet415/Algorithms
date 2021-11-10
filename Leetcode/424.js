/**
 * 424. Longest Repeating Character Replacement
Medium

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 
 */

var characterReplacement = function(s, k) {
    let left = 0;
    let max = 0;
    let hash = {};
    for(let right = 0; right < s.length; right++) {
        hash[s[right]] ? hash[s[right]]+=1 : hash[s[right]] = 1;
        
        max = Math.max(hash[s[right]],max);
        if(right-left+1-max > k) {
            hash[s[left]]--;
            left++;
        }
    }
    return s.length-left;
};