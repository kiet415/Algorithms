/**
 * 2032. Two Out of Three

Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.
 */

var twoOutOfThree = function(nums1, nums2, nums3) {
    let set = new Set(), set1 = new Set(), set2 = new Set(), set3 = new Set();
    let res = [];
    for(let i = 0; i < nums1.length; i++) {
        set1.add(nums1[i]);
        set.add(nums1[i]);
    }
    for(let i = 0; i < nums2.length; i++) {
        set2.add(nums2[i]);
        set.add(nums2[i]);
    }
    for(let i = 0; i < nums3.length; i++) {
        set3.add(nums3[i]);
        set.add(nums3[i]);
    }
    
    set.forEach(ele => {
        if((set1.has(ele) && set2.has(ele)) || (set1.has(ele) && set3.has(ele)) || (set2.has(ele) && set3.has(ele)))  res.push(ele)
    })
    return res;
};