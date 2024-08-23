let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
let gameWon = false;

function makeMove(cellIndex) {
    if (!gameBoard[cellIndex] && !gameWon) {
        gameBoard[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].textContent = currentPlayer;

        if (checkWin()) {
            document.getElementById('status').textContent = `${currentPlayer} wins!`;
            gameWon = true;
            showResetButton();
        } else if (gameBoard.every(cell => cell !== '')) {
            document.getElementById('status').textContent = "It's a draw!";
            showResetButton();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').textContent = `${currentPlayer}'s turn`;
        }
    }
}

function checkWin() {
    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }
    return false;
}

function showResetButton() {
    document.getElementById('resetButton').style.display = 'block';
}

function resetBoard() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameWon = false;
    document.getElementById('status').textContent = "X's turn";
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.textContent = '';
    }
    document.getElementById('resetButton').style.display = 'none';
}

resetBoard(); // Initialize the game
