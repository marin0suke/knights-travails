function knightMoves(startSquare, goalSquare) { 

    const validMoves = (x, y) => {

        const moves = [
            [x + 1, y + 2], [x - 1, y + 2],
            [x - 2, y + 1], [x - 2, y - 1],
            [x - 1, y - 2], [x + 1, y - 2],
            [x + 2, y - 1], [x + 2, y + 1]
        ];

        return moves.filter(([newX, newY]) => newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7); // destructuring each move to directly apply condition to each.
        //destructured params require parentheses in arrow func.
    }
        
    const getPath = (start, end) => { // BFS to explore shortest path.
        let queue = [[start, [start]]]; // element 1 is current, and element 2 is the saved path. we want to update this each iteration to find shortest path.
        const visited = new Set(); // serves as a checklist of visited squares, to avoid adding the same squares to the queue. (some moves will have the same "neighbours" that have already been visited.)
        // Set.has() has O(1) lookup. 

        while (queue.length > 0) {
            const [current, path] = queue.shift(); // this takes first element in queue, and destructures it into current and path.

            if (current[0] === end[0] && current[1] === end[1]) { // check if we have arrived at goal square.
                return path; // return the path element of the array that fulfills this check.
            }

            visited.add(`${current[0]}, ${current[1]}`); // use string format for easy lookup. - if we added the array, we couldn't use .has for lookup - would need to manually check + more complicated.

            for (const move of validMoves(current[0], current[1])) { // for each valid move from the current position.
                if (!visited.has(`${move[0]}, ${move[1]}`)) { 
                    queue.push([move, [...path, move]]); // with each node that is visited, we check if it exists inside the Set. if it doesn’t we add it to the queue. this way we don’t end up adding duplicates to the queue const. we use Set as like a checking system before adding it to the queue (which is what we actually return from).
                }
            }
        }

        return null;

    };

    const path = getPath(startSquare, goalSquare);
    
    return `You made it in ${path.length - 1} moves! Here's your path:\n${path.join(" -> ")}`; // - 1 so that the starting position doesn't count as a move.
    // \n is new line for the output. 
        
    
}

console.log(knightMoves([0,0],[7,7]));

