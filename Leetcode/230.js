/**
 * 230. Kth Smallest Element in a BST

Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

 
 */

var kthSmallest = function(root, k) {
    let arr = [];
    let node = root;
    function dfs(node) {
        if(!node) return;
        arr.push(node.val);
        
        if(node.left) dfs(node.left);
        if(node.right) dfs(node.right);
        
    }
    dfs(node);
    arr.sort(sorted);
    return arr[k-1];
};
function sorted(a,b) {
    return a-b;
}