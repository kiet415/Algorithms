/**
 * 1302. Deepest Leaves Sum
Medium

Given the root of a binary tree, return the sum of values of its deepest leaves.
 
 */

var deepestLeavesSum = function(root) {
    let deepest = 0;
    let sum = root.val;
    function dfs(node, level) {
        if(!node) return;
        if(deepest === level) {
            sum += node.val;
        } else if (deepest < level) {
            deepest = level;
            sum = node.val;
        }
        if(node.left) dfs(node.left,level+1);
        if(node.right) dfs(node.right,level+1);
        
    }
    
    dfs(root,0);
    return sum;
};