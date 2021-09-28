/**
 * 513. Find Bottom Left Tree Value

Given the root of a binary tree, return the leftmost value in the last row of the tree.
 */

var findBottomLeftValue = function(root) {
    
    let stack = [root];
    let node;
    while(stack.length) {
        node = stack.shift();
        
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
        
        //console.log(stack)
    }
    
    return node.val;
};