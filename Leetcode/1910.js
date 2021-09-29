/**
 * 1910. Remove All Occurrences of a Substring

Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:

Find the leftmost occurrence of the substring part and remove it from s.
Return s after removing all occurrences of part.

A substring is a contiguous sequence of characters in a string.
 */

var removeOccurrences = function(s, part) {
    
    while(s.indexOf(part) >= 0) {
        let idx = s.indexOf(part);
        s = s.split("");
        s.splice(idx, part.length);
        s = s.join("");
        
    }
    return s
 
};