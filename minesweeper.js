function printTheBoard(cols=5, rows=5, mines=5) {
    
    let myBoard = generateMines(mines, cols, rows);
    // board = checkNeighbors(board, cols, row);
    for(let i = 0; i < rows; i++) {
        let arr = myBoard.splice(0,cols)
        console.log('row',i, arr.join(' '));
    }
}

function generateMines(cols, rows, num) {
    let board = Array.from(Array(cols*rows));
    let minesArr = [];
    while(minesArr.length < num) {
        let random = Math.floor(Math.random(num) * board.length);
        if (!minesArr.includes(random)) minesArr.push(random)
    }
    minesArr.sort((a,b) => a-b);
    for(let i = 0; i < board.length; i++) {
        minesArr.includes(i) ? board[i] = 'X' : board[i] = 0;
    }
    // return board;
    checkNeighbors(board, cols, rows);
    return board;
}

function checkNeighbors(b, c, r) {
    for(let i = 0; i < r; i++) {
        for(let j = 0; j < c; j++) {
            let mine = 0;
            let pos = i * r + j;
            if(b[pos] !== 'X') {
                if(j < c && i < r && b[pos + r + 1] === 'X') mine++;
                if(i < r && b[pos + r] === 'X') mine++;
                if(j > 0 && i < r && b[pos + r - 1] === 'X') mine++;
                
                if(i > 0 && j < c && b[pos - r + 1] === 'x') mine++;
                if(i > 0 && b[pos - r] === 'X') mine++;
                if(j > 0 && i > 0 && b[pos - r - 1] === 'X') mine++;

                if(j < c && b[pos + 1] === 'X') mine++;
                if(j > 0 && b[pos - 1] === 'X') mine++;
            b[pos] = mine;
            }
            
        }
    }
    return b;
}

printTheBoard(6,6,6)