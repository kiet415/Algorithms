/**
 * 1456. Maximum Number of Vowels in a Substring of Given Length
Medium

Given a string s and an integer k.

Return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are (a, e, i, o, u).
 */

var maxVowels = function(s, k) {
    const vowels = "aeiou";
    let currVowels = 0;
    let maxVowels = 0;
    let left = 0;
    for(let right = 0; right < s.length; right++) {
        if(vowels.includes(s[right])) currVowels++;
        maxVowels = Math.max(maxVowels, currVowels);
        if((right-left) === (k-1)) {
            if(vowels.includes(s[left])) {
                currVowels--;
            }
            left++;
        }
        
        
        //console.log(currVowels, maxVowels,left, right)
    }
    
    return maxVowels;
};