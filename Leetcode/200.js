/**
 * 200. Number of Islands

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 */

var numIslands = function(grid) {
    let res = 0;
    
    function dfs(row, col) {
        if(row >= 0 && row < grid.length && col >= 0 && col < grid[row].length) {
            if(grid[row][col] === "1") {
                grid[row][col] = "0";
            } else {
                return;
            }
            dfs(row+1,col); //down
            dfs(row-1,col); //up
            dfs(row,col+1); //right
            dfs(row,col-1); //left
        }
        
    }
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === "1") {
                dfs(i, j);
                res++;
            }   
        }
    }
    
    
    
    return res;
};