//Merge Intervals
function getMergedIntervals(intervals) {
    // Write your code here
    let sortedArr = intervals.sort(sorted);
   console.log(sortedArr)
   let res = [];
   
   
   let currStart = sortedArr[0][0],currEnd = sortedArr[0][1];
   for(let i = 1 ; i < sortedArr.length; i++) {
       if(sortedArr[i][0] <= currEnd) {
           currEnd = Math.max(currEnd, sortedArr[i][1])
       } else {
           res.push([currStart, currEnd]);
          
            currStart = sortedArr[i][0];
            currEnd = sortedArr[i][1];
     
       }
       //console.log(currStart,currEnd)
   }
   res.push([currStart,currEnd])
   return res;
}
function sorted(a,b) {
    return a[0] - b[0];
}