/**
 * 1941. Check if All Characters Have Equal Number of Occurrences

Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).
 */

var areOccurrencesEqual = function(s) {
    let hash = {};
    for(let i = 0; i < s.length; i++) {
        hash[s[i]] ? hash[s[i]] += 1 : hash[s[i]] = 1;
    }
    const keys = Object.keys(hash);
    for(let i = 0; i < keys.length-1; i++) {
        if(hash[keys[i]] !== hash[keys[i+1]]) return false;
    }
    
    return true;
};