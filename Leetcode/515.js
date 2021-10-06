/**
 * 515. Find Largest Value in Each Tree Row

Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed)
 */

var largestValues = function(root) {
    let res = [];
    if(!root) return [];
    let stack = [[root,0]];
    while(stack.length){
        
        let idx = stack.shift();
        //console.log(idx)
        let node = idx[0];
        let level = idx[1];
        res[level] !== undefined ? res[level] = Math.max(res[level], node.val) : res[level] = node.val;
        if(node.left) stack.push([node.left,level+1]);
        if(node.right)stack.push([node.right,level+1]);
    }
    
    return res;
};

/** DFS WAY
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
*/