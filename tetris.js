const canvas = document.getElementById("tetris");
const ctx = canvas.getContext("2d");

ctx.scale(20, 20);

const matrix = [
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 1],
];

const player = {
  position: { x: 0, y: 0 },
  currentPiece: matrix,
}

const draw = () => {
  ctx.fillStyle = "rgb(240, 240, 240)";
  ctx.fillRect(0, 0, 10, 20);
  drawPlayer(player);
}

const dropPiece = () => {

}

const drawPlayer = (player) => {
  ctx.fillStyle = "blue";
  player.currentPiece.forEach((row, i) => {
    row.forEach((_, j) => {
      if (matrix[i][j] === 1) {
        ctx.fillRect(j + player.position.x, i + player.position.y, 1, 1);
      }
    })
  })
}

const updatePlayerPosition = () => {

}

let lastUpdate = 0;
let dropCounter = 0;
let dropInterval = 1000;

const update = (time = 0) => {
  const delta = time - lastUpdate;

  dropCounter += delta;
  if (dropCounter > dropInterval) {
    player.position.y += 1;
    dropCounter = 0;
  }
  lastUpdate = time;

  draw();
  window.requestAnimationFrame(update)
}

update();