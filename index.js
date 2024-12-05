
function knightMoves(startSquare, goalSquare) {

    const validMoves = (x, y) => {

        const moves = [
            [x + 1, y + 2], [x - 1, y + 2],
            [x - 2, y + 1], [x - 2, y - 1],
            [x - 1, y - 2], [x + 1, y - 2],
            [x + 2, y - 1], [x + 2, y + 1]
        ]

        return moves.filter(([newX, newY]) => newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7); // destructuring each move to directly apply condition to each.
        //destructured params require parentheses in arrow func.

    }
        
        
    
        
    
}

