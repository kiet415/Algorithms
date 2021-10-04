/**
 * 419. Battleships in a Board

Given an m x n matrix board where each cell is a battleship 'X' or empty '.', return the number of the battleships on board.

Battleships can only be placed horizontally or vertically on board. In other words, they can only be made of the shape 1 x k (1 row, k columns) or k x 1 (k rows, 1 column), where k can be of any size. At least one horizontal or vertical cell separates between two battleships (i.e., there are no adjacent battleships).
 */
var countBattleships = function(board) {
    let ships = 0;
    
    function dfs(row,col) {
        if(!board[row] || !board[row][col] || board[row][col] === ".") return;
        board[row][col] = ".";
        dfs(row+1,col);
        dfs(row-1,col);
        dfs(row,col+1);
        dfs(row,col-1);
    }
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if(board[i][j] === "X") {
                dfs(i,j);
                ships++;
            }
        }
    }
    
    return ships;
};