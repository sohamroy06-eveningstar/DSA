/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(!grid.length || !grid[0].length) {
        return 0;
    }
    const rows = grid.length;
    const cols = grid[0].length;
    let  islandCount = 0;

    const directions  = [
        [-1,0],
        [1,0],
        [0,1],
        [0,-1]
    ]
    for(let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if(grid[r][c] !== "1") {
                continue;
            }
            islandCount++;

            const stack = [[r,c]];
            grid[r][c] = "0";
            while(stack.length > 0) {
                const [currentRow,currentCol] = stack.pop();
                for(const[dr,dc] of directions) {
                    const nextRow = currentRow + dr;
                    const nextCol = currentCol + dc;
                    if(nextRow >= 0 && 
                    nextRow < rows &&
                    nextCol >= 0 && 
                    nextCol < cols && 
                    grid[nextRow][nextCol] === "1"
                    ) {
                        grid[nextRow][nextCol] = "0";
                        stack.push([nextRow,nextCol])
                    }
                }
            }
        }
    }
    return islandCount;
};