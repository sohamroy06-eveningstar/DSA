/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const rows = board.length;
    if(rows === 0 || board[0].length === 0) {
        return ;
    }
    const cols = board[0].length 
      function markSafe(startRow, startCol) {
        const stack = [[startRow, startCol]];

        board[startRow][startCol] = "#";

        const directions = [
            [-1, 0], 
            [1, 0],  
            [0, -1], 
            [0, 1]  
        ];

        while (stack.length > 0) {
            const [r, c] = stack.pop();

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (
                    nr >= 0 &&
                    nr < rows &&
                    nc >= 0 &&
                    nc < cols &&
                    board[nr][nc] === "O"
                ) {
                    board[nr][nc] = "#";
                    stack.push([nr, nc]);
                }
            }
        }
    }

    
    for (let r = 0; r < rows; r++) {
        if (board[r][0] === "O") {
            markSafe(r, 0);
        }

        if (board[r][cols - 1] === "O") {
            markSafe(r, cols - 1);
        }
    }

    
    for (let c = 0; c < cols; c++) {
        if (board[0][c] === "O") {
            markSafe(0, c);
        }

        if (board[rows - 1][c] === "O") {
            markSafe(rows - 1, c);
        }
    }

    // Step 3: Final transformation
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === "O") {
                board[r][c] = "X";
            } else if (board[r][c] === "#") {
                board[r][c] = "O";
            }
        }
    }
};