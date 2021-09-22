function minMoves(n, startRow, startCol, endRow, endCol) {
    // Write your code here
    let set = new Set();
    let minMoves = Infinity;
    function recur(startRow, startCol, moves) {
        
        if(startRow < 0 || startRow >= n || startCol < 0 || startCol >= n || set.has(`${startRow},${startCol}`)) return;
        if(startRow === endRow && startCol === endCol) {
            minMoves = Math.min(minMoves, moves);
            return;
        }
        set.add(`${startRow},${startCol}`);
        
        console.log(startRow, startCol, moves)
        
        recur(startRow+2,startCol+1, moves+1);
        recur(startRow+2,startCol-1, moves+1);
        recur(startRow-2,startCol+1, moves+1);
        recur(startRow-2,startCol-1, moves+1);
        recur(startRow+1,startCol+2, moves+1);
        recur(startRow-1,startCol+2, moves+1);
        recur(startRow+1,startCol-2, moves+1);
        recur(startRow-1,startCol-2, moves+1);
        set.delete(`${startRow},${startCol}`)
    }
    recur(startRow, startCol, 0);
    if(minMoves === Infinity) return -1;
    return minMoves;
}