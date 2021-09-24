/**
 * 226. Invert Binary Tree

Given the root of a binary tree, invert the tree, and return its root.
 */

var invertTree = function(root) {
    
    function dfs(node) {
        if(!node) return;
        dfs(node.left);
        dfs(node.right);
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
    }
    dfs(root);
    return root;
};