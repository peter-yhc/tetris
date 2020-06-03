const canvas = document.getElementById("tetris");
const ctx = canvas.getContext("2d");

ctx.scale(20, 20);

const player = Player();

const draw = () => {
  ctx.fillStyle = "rgb(240, 240, 240)";
  ctx.fillRect(0, 0, 10, 20);
  player.drawCurrentPiece(ctx);
}

let lastUpdate = 0;
let dropCounter = 0;
let dropInterval = 1000;

const updateCanvas = (time = 0) => {
  const delta = time - lastUpdate;

  dropCounter += delta;
  if (dropCounter > dropInterval) {
    player.descend();
    dropCounter = 0;
  }
  lastUpdate = time;

  draw();
  window.requestAnimationFrame(updateCanvas)
}

updateCanvas();