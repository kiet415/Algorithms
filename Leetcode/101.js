/**
 * 101. Symmetric Tree
Easy

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
 */

var isSymmetric = function(root) {
    
    function dfs(left, right) {
        if(!left && !right) return true;
        if(!left || !right) return false;
        if(left.val !== right.val) return false;
        return dfs(left.left,right.right) && dfs(left.right, right.left)
        
    }
    return dfs(root.left, root.right)
    
    
};