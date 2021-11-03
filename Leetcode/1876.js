/**
 * 1876. Substrings of Size Three with Distinct Characters
Easy

A string is good if there are no repeated characters.

Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

A substring is a contiguous sequence of characters in a string
 */

var countGoodSubstrings = function(s) {
    let set = new Set();
    let left = 0, right = 0;
    let res = 0;
    while(right < s.length) {
        while(set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        if(set.size === 3) res++;
        
        if(right-left === 2) {
            set.delete(s[left]);
            left++;
        }  
        right++;
        
        
    }
    return res;
};