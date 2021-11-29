/**
 * 2085. Count Common Words With One Occurrence
Easy

Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.
 */

var countWords = function(words1, words2) {
    let hash1 = {}, hash2 = {}, count = 0;
    words1.forEach(word => {
        hash1[word] ? hash1[word]+=1 : hash1[word] = 1;
    });
    words2.forEach(word => {
        hash2[word] ? hash2[word]+=1 : hash2[word] = 1;
    });
    
    let keys1 = Object.keys(hash1);
    keys1.forEach(key => {
        if(hash1[key] === 1 && hash2[key] === 1) count++;
    })
    
    return count;
};