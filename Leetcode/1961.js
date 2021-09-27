/**
 * 1961. Check If String Is a Prefix of Array

Given a string s and an array of strings words, determine whether s is a prefix string of words.

A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.

Return true if s is a prefix string of words, or false otherwise.
 */

var isPrefixString = function(s, words) {
    let str = "";
    for(let i = 0; i < words.length; i++) {
        str+=words[i];
        if(str === s) return true;
    }

    return false;
};