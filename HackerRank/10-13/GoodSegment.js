function goodSegment(badNumbers, lower, upper) {
    // Write your code here
    let sorted = badNumbers.sort((a,b) => a-b);
    let maxLen = 0
    if(lower < sorted[0]) {
        maxLen = sorted[0] - lower;
    }
    console.log(sorted)
    for(let i = 1; i < sorted.length; i++) {
        if(sorted[i] > upper) {
            maxLen = Math.max(upper-sorted[i-1],maxLen)
        }
        if(sorted[i-1] > lower && sorted[i] < upper) {
            maxLen = Math.max(sorted[i]-1 - sorted[i-1], maxLen)
            //console.log(sorted[i-1],sorted[i])
        }
    }
    
   if(upper > sorted[sorted.length-1]) {
        maxLen = Math.max(upper-sorted[sorted.length-1], maxLen);
    }
             
    return maxLen
}