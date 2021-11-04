/**
 * 1302. Deepest Leaves Sum
Medium

Given the root of a binary tree, return the sum of values of its deepest leaves.
 
 */

var deepestLeavesSum = function(root) {
    let arr = [root.val];
    
    function dfs(node, level) {
        if(!node) return;
        
        if(!arr[level]) {
            arr[level] = node.val;
        } else {
            arr[level] += node.val;
        }
        if(node.left) dfs(node.left,level+1);
        if(node.right) dfs(node.right,level+1);
        
    }
    
    dfs(root,0);
    return arr[arr.length-1];
};