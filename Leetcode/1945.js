/**
 * 1945. Sum of Digits of String After Convert

You are given a string s consisting of lowercase English letters, and an integer k.

First, convert s into an integer by replacing each letter with its position in the alphabet (i.e., replace 'a' with 1, 'b' with 2, ..., 'z' with 26). Then, transform the integer by replacing it with the sum of its digits. Repeat the transform operation k times in total.

For example, if s = "zbax" and k = 2, then the resulting integer would be 8 by the following operations:

Convert: "zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
Transform #1: 262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
Transform #2: 17 ➝ 1 + 7 ➝ 8
Return the resulting integer after performing the operations described above.
 */

var getLucky = function(s, k) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let res = "";
    for(let i = 0; i < s.length; i++) {
        res+=alpha.indexOf(s[i])+1;
    }
    
    //console.log(res)
    while(k) {
        let temp = 0;
        
       
        for(let i = 0; i < res.length; i++) {
            temp+=parseInt(res[i]);
        }
        
        res = temp.toString();
        
        k--;
    }
    return parseInt(res);
};