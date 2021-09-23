/**
 * 1844. Replace All Digits with Characters

You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.
 */

var replaceDigits = function(s) {
    let arr = s.split("");
    let letters = "abcdefghijklmnopqrstuvwxyz"
    for(let i = 1; i < arr.length; i+=2) {
        
        arr[i] = letters[letters.indexOf(arr[i-1])+parseInt(arr[i])];
    }
    return arr.join("");
};