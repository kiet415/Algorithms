/**
 * 1869. Longer Contiguous Segments of Ones than Zeros

Given a binary string s, return true if the longest contiguous segment of 1's is strictly longer than the longest contiguous segment of 0's in s, or return false otherwise.

For example, in s = "110100010" the longest continuous segment of 1s has length 2, and the longest continuous segment of 0s has length 3.
Note that if there are no 0's, then the longest continuous segment of 0's is considered to have a length 0. The same applies if there is no 1's.

 
 */

var checkZeroOnes = function(s) {
    let oneLen = 0, zeroLen = 0, currLen = 0;
    let one = false;
    for(let i = 0; i < s.length; i++) {
        if(s[i] ==="1" && one) {
            currLen += 1;
            oneLen = Math.max(currLen,oneLen)
        } else if(s[i] ==="1" && !one) {
            one = true;
            currLen = 1;
            oneLen = Math.max(currLen,oneLen)
        } else if(s[i] === "0" && !one) {
            currLen+=1;
            zeroLen = Math.max(currLen, zeroLen);
        } else if(s[i] ==="0" && one){
            currLen = 1;
            one = false;
            zeroLen = Math.max(currLen,zeroLen)
        }
        //console.log(currLen, one)
    }
    
    
    return oneLen > zeroLen;
};