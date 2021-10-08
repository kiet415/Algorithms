/**
 * 104. Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 */

var maxDepth = function(root) {
    if(!root) return 0;
    let maxDepth = 1;
    
    function dfs(node, level) {
        if(!node) return;
        maxDepth = Math.max(maxDepth, level);
        dfs(node.left, level+1);
        
        dfs(node.right, level+1);
    }
    dfs(root,1)
    return maxDepth;
};
