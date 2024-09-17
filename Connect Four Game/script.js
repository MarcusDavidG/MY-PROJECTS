const rows = 6;
const cols = 7;
const board = [];
let currentPlayer = 'red'; // Player 1 is 'red', Player 2 is 'yellow'
let gameOver = false;

const boardElement = document.getElementById('board');
const statusElement = document.getElementById('status');
const restartButton = document.getElementById('restartButton');

function createBoard() {
    for (let r = 0; r < rows; r++) {
        board[r] = [];
        for (let c = 0; c < cols; c++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = r;
            cell.dataset.col = c;
            board[r][c] = '';
            boardElement.appendChild(cell);
            cell.addEventListener('click', handleCellClick);
        }
    }
}

function handleCellClick(e) {
    if (gameOver) return;
    const col = e.target.dataset.col;
    const row = findEmptyRow(col);
    if (row === null) return; // Column is full

    board[row][col] = currentPlayer;
    updateCell(row, col);

    if (checkWin(row, col)) {
        gameOver = true;
        statusElement.textContent = `${currentPlayer === 'red' ? 'Player 1' : 'Player 2'} Wins!`;
        return;
    }

    // Switch players
    currentPlayer = currentPlayer === 'red' ? 'yellow' : 'red';
    statusElement.textContent = `${currentPlayer === 'red' ? 'Player 1' : 'Player 2'}'s Turn (${currentPlayer === 'red' ? 'Red' : 'Yellow'})`;
}

function findEmptyRow(col) {
    for (let r = rows - 1; r >= 0; r--) {
        if (board[r][col] === '') {
            return r;
        }
    }
    return null; // Column is full
}

function updateCell(row, col) {
    const cell = document.querySelector(`[data-row='${row}'][data-col='${col}']`);
    cell.classList.add(currentPlayer);
}

function checkWin(row, col) {
    return (
        checkDirection(row, col, 1, 0) || // Horizontal
        checkDirection(row, col, 0, 1) || // Vertical
        checkDirection(row, col, 1, 1) || // Diagonal right-down
        checkDirection(row, col, 1, -1)   // Diagonal left-down
    );
}

function checkDirection(row, col, rowDir, colDir) {
    let count = 1;
    count += countInDirection(row, col, rowDir, colDir);
    count += countInDirection(row, col, -rowDir, -colDir);
    return count >= 4;
}

function countInDirection(row, col, rowDir, colDir) {
    let count = 0;
    let r = row + rowDir;
    let c = col + colDir;
    while (r >= 0 && r < rows && c >= 0 && c < cols && board[r][c] === currentPlayer) {
        count++;
        r += rowDir;
        c += colDir;
    }
    return count;
}

restartButton.addEventListener('click', restartGame);

function restartGame() {
    boardElement.innerHTML = ''; // Clear the board
    board.length = 0; // Reset the board array
    currentPlayer = 'red'; // Reset to Player 1
    gameOver = false;
    statusElement.textContent = "Player 1's Turn (Red)";
    createBoard();
}

// Initialize the game
createBoard();
