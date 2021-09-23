/**
 * 1967. Number of Strings That Appear as Substrings in Word

Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.

A substring is a contiguous sequence of characters within a string.
 */


var numOfStrings = function(patterns, word) {
    let res = 0;
    for(let i = 0; i < patterns.length; i++) {
        if(word.includes(patterns[i])) res++;
    }
    
    return res;
};