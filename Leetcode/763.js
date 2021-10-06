/**
 * You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Return a list of integers representing the size of these parts.
 */

var partitionLabels = function(S) {
    let hash = {};
    for(let i = 0; i < S.length; i++) {
        hash[S[i]] ? hash[S[i]][1] = i : hash[S[i]] = [i];
    }
    let res = [];
    let currMax = 0;
    let start = 0;
    let set = new Set();
    for(let i = 0; i < S.length; i++) {
        if(currMax === i && !hash[S[i]][1]) {
            res.push(1);
            start++;
            currMax++;
        } else if(!set.has(S[i])) {
            set.add(S[i]);
            if(hash[S[i]][1]) {
                currMax = Math.max(hash[S[i]][1], currMax);
            }
            
        } else {
            
            if(currMax === i) {
                
                res.push(currMax - start + 1);
                set = new Set();
                start = i+1;
                currMax++;
            }
        }
        //console.log(set, currMax,res)
    }
    if(set.size) {
        res.push(currMax-start+2)
    }
    return res;
};