/**
 * 1161. Maximum Level Sum of a Binary Tree

Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the smallest level x such that the sum of all the values of nodes at level x is maximal.
 */

var maxLevelSum = function(root) {
    let stack = [[root,0]];
    let max = -Infinity;
    let maxLevel = 0;
    let arr = [];
    let level = 0;
    while(stack.length !== 0) {
        let node = stack.pop();
        let level = node[1];
        //console.log(node[0], level)
        if(arr[level] === undefined) {
            arr[level] = node[0].val;
        } else {
            arr[level] += node[0].val;
        }
        
        
        if(node[0].left) stack.push([node[0].left,level+1]);
        if(node[0].right) stack.push([node[0].right,level+1]);
    }
    //console.log(arr)
    for(let i = 0; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
            maxLevel = i+1;
        }
    }
    return maxLevel;
};