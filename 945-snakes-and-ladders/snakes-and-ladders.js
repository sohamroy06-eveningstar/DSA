/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
 
    const n = board.length;
    const target = n * n;

   
    function getPosition(square) {
        const rowFromBottom = Math.floor((square - 1) / n);

        const row = n - 1 - rowFromBottom;
        let col = (square - 1) % n;

        if (rowFromBottom % 2 === 1) {
            col = n - 1 - col;
        }

        return [row, col];
    }

    
    const dist = Array(target + 1).fill(-1);
    dist[1] = 0;

   
    const queue = [1];
    let head = 0;

    while (head < queue.length) {
        const curr = queue[head++];

        
        if (curr === target) {
            return dist[curr];
        }

        
        for (let roll = 1; roll <= 6; roll++) {
            const next = curr + roll;

            if (next > target) {
                break;
            }

            const [row, col] = getPosition(next);

          
            const dest =
                board[row][col] === -1
                    ? next
                    : board[row][col];

           
            if (dist[dest] !== -1) {
                continue;
            }

            dist[dest] = dist[curr] + 1;
            queue.push(dest);
        }
    }

    
    return -1;
};