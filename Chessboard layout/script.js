const chessboard = document.getElementById("chessboard");

// Function to create a chessboard layout
function createChessboard() {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement("div");
            square.classList.add("square");

            // Alternate colors between black and white
            if ((row + col) % 2 === 0) {
                square.classList.add("white");
            } else {
                square.classList.add("black");
            }

            // Add chess pieces to the board
            if (row === 0 || row === 7) {
                let piece = "";
                switch (col) {
                    case 0:
                    case 7:
                        piece = row === 0 ? "♖" : "♜";
                        break;
                    case 1:
                    case 6:
                        piece = row === 0 ? "♘" : "♞";
                        break;
                    case 2:
                    case 5:
                        piece = row === 0 ? "♗" : "♝";
                        break;
                    case 3:
                        piece = row === 0 ? "♕" : "♛";
                        break;
                    case 4:
                        piece = row === 0 ? "♔" : "♚";
                        break;
                }
                square.innerHTML = `<span class="piece">${piece}</span>`;
            } else if (row === 1 || row === 6) {
                const pawn = row === 1 ? "♙" : "♟";
                square.innerHTML = `<span class="piece">${pawn}</span>`;
            }

            chessboard.appendChild(square);
        }
    }
}

// Call the function to create the chessboard
createChessboard();
