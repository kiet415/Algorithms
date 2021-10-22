/**
 * 451. Sort Characters By Frequency

Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.
 */
var frequencySort = function(s) {
    let hash = {};
    let res = "";
    for(let i =0 ; i < s.length; i++) {
        hash[s[i]] ? hash[s[i]] +=1 : hash[s[i]] = 1;
    }
    //console.log(hash)
    let keys = Object.keys(hash).sort((a,b) => hash[b]-hash[a]);
    //console.log(keys)
    for(let i = 0; i < keys.length; i++) {
        while(hash[keys[i]]) {
            res+=(keys[i]);
            hash[keys[i]]--;
        }
    }
    return res;
};