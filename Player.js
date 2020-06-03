const Player = () => {
    const matrix = [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1],
    ];

    const position = { x: 0, y: 0 };
    const currentPiece = matrix;

    const drawCurrentPiece = (ctx) => {
        ctx.fillStyle = "blue";
        currentPiece.forEach((row, i) => {
            row.forEach((_, j) => {
                if (matrix[i][j] === 1) {
                    ctx.fillRect(j + position.x, i + position.y, 1, 1);
                }
            })
        })
    }

    const descend = () => {
        position.y += 1;
    }

    return {
        drawCurrentPiece,
        descend,
    }
}