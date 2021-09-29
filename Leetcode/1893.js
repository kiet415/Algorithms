/**
 * 1893. Check if All the Integers in a Range Are Covered

You are given a 2D integer array ranges and two integers left and right. Each ranges[i] = [starti, endi] represents an inclusive interval between starti and endi.

Return true if each integer in the inclusive range [left, right] is covered by at least one interval in ranges. Return false otherwise.

An integer x is covered by an interval ranges[i] = [starti, endi] if starti <= x <= endi.
 */

var isCovered = function(ranges, left, right) {
    ranges = ranges.sort((a,b) => a[0]-b[0])
    for(let i = 0; i < ranges.length; i++) {
        
        while(left >= ranges[i][0] && left <= ranges[i][1]) {
            left++;
            //console.log(ranges[i], left)
        }
    }
    return left > right;
};
