/**
 * 1812. Determine Color of a Chessboard Square

You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.



Return true if the square is white, and false if the square is black.

The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.
 */
var squareIsWhite = function(coordinates) {
    
    let odds = 'aceg';
    if((odds.includes(coordinates[0]) && coordinates[1] % 2 === 0) || (!odds.includes(coordinates[0]) && coordinates[1] % 2 !== 0)) {
        return true;
    }
    return false;
};