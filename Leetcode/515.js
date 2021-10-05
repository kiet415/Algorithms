/**
 * 515. Find Largest Value in Each Tree Row

Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed)
 */

var largestValues = function(root) {
    let arr = [];
    let ans = [];
    function dfs(node,level) {
        if(!node) return;
        arr[level] ? arr[level].push(node.val) : arr[level] = [node.val] ;
        if(node.left) dfs(node.left,level+1);
        if(node.right) dfs(node.right,level+1);

    }
    
    dfs(root,0)
    for(let i = 0; i < arr.length; i++) {
        let max = -Infinity;
        for(let j =0 ; j < arr[i].length; j++) {
            max = Math.max(max,arr[i][j]);
        }
        ans.push(max);
    }
    return ans;
};