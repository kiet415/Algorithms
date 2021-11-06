/**
 * 4. Median of Two Sorted Arrays
HARD

Share
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
 */

let p1 = 0;
    let p2 = 0;
    let arr = [];
    while(arr.length !== nums1.length + nums2.length) {
        if(nums1[p1] === undefined) {
            arr.push(nums2[p2]);
            p2++;
        } else if (nums2[p2] === undefined) {
            arr.push(nums1[p1]);
            p1++;
        } else if(nums1[p1] < nums2[p2]) {
            arr.push(nums1[p1]);
            p1++;
        } else {
            arr.push(nums2[p2]);
            p2++;
        }
    }
    //if odd 
    if(arr.length % 2 !== 0) {
        return arr[Math.floor(arr.length / 2)];
    } else { // if even 4, 1 2 
        return (arr[arr.length/2] + arr[arr.length/2 -1]) / 2 ;
    }