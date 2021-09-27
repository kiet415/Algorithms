/**
 * 1957. Delete Characters to Make Fancy String

A fancy string is a string where no three consecutive characters are equal.

Given a string s, delete the minimum possible number of characters from s to make it fancy.

Return the final string after the deletion. It can be shown that the answer will always be unique.
 */

var makeFancyString = function(s) {
    let res = "";
    res+=s[0];
    let count = 1;
    for(let i = 1; i < s.length; i++) {
        if(s[i] === res[res.length-1] && count <= 1) {
            count++;
            res+=s[i];
        } else if(s[i] !== res[res.length-1]) {
            count = 1;
            res+=s[i];
        }
    }
    return res;
};