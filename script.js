// Initialize canvas and context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Player positions and size
let player1X = 50;
let player1Y = canvas.height / 2;
let player2X = canvas.width - 100;
let player2Y = canvas.height / 2;
const playerWidth = 50;
const playerHeight = 100;
const playerSpeed = 5;

// Draw stick figures
function drawStickFigure(x, y, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;

    // Body
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + 80);
    ctx.stroke();

    // Arms
    ctx.beginPath();
    ctx.moveTo(x, y + 40);
    ctx.lineTo(x - 20, y + 20);
    ctx.moveTo(x, y + 40);
    ctx.lineTo(x + 20, y + 20);
    ctx.stroke();

    // Legs
    ctx.beginPath();
    ctx.moveTo(x, y + 80);
    ctx.lineTo(x - 20, y + 120);
    ctx.moveTo(x, y + 80);
    ctx.lineTo(x + 20, y + 120);
    ctx.stroke();
}

// Update player positions based on keyboard input
function update() {
    // Player 1 controls (WASD)
    if (keys[87]) player1Y -= playerSpeed; // W
    if (keys[83]) player1Y += playerSpeed; // S
    if (keys[65]) player1X -= playerSpeed; // A
    if (keys[68]) player1X += playerSpeed; // D

    // Player 2 controls (Arrow keys)
    if (keys[38]) player2Y -= playerSpeed; // Up arrow
    if (keys[40]) player2Y += playerSpeed; // Down arrow
    if (keys[37]) player2X -= playerSpeed; // Left arrow
    if (keys[39]) player2X += playerSpeed; // Right arrow
}

// Main game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player 1
    drawStickFigure(player1X, player1Y, "blue");

    // Draw player 2
    drawStickFigure(player2X, player2Y, "red");

    update();

    requestAnimationFrame(gameLoop);
}

// Keyboard input handling
const keys = [];
window.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});
window.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});

gameLoop();
