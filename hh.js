const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const tileSize = 32;
const worldWidth = canvas.width / tileSize;
const worldHeight = canvas.height / tileSize;

// Definição do mapa
const map = [
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

// Jogador
let player = {
    x: 100,
    y: 100,
    color: 'blue',
    size: tileSize
};

// Movimentação
const movement = {
    up: false,
    down: false,
    left: false,
    right: false
};

// Função para desenhar o mapa
function drawMap() {
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            const tile = map[y][x];
            if (tile === 0) {
                ctx.fillStyle = '#55a630'; // Cor para grama
            } else if (tile === 1) {
                ctx.fillStyle = '#228B22'; // Cor para árvores
            }
            ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
        }
    }
}

// Função para desenhar o jogador
function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.size, player.size);
}

// Função para mover o jogador
function movePlayer() {
    const playerTileX = Math.floor(player.x / tileSize);
    const playerTileY = Math.floor(player.y / tileSize);

    // Movimentação com colisão
    if (movement.up && playerTileY > 0 && map[playerTileY - 1][playerTileX] === 0) {
        player.y -= tileSize;
    }
    if (movement.down && playerTileY < worldHeight - 1 && map[playerTileY + 1][playerTileX] === 0) {
        player.y += tileSize;
    }
    if (movement.left && playerTileX > 0 && map[playerTileY][playerTileX - 1] === 0) {
        player.x -= tileSize;
    }
    if (movement.right && playerTileX < worldWidth - 1 && map[playerTileY][playerTileX + 1] === 0) {
        player.x += tileSize;
    }
}

// Função para iniciar o jogo
function startGame() {
    const menu = document.getElementById('menu');
    menu.style.display = 'none'; // Esconder menu
    canvas.style.display = 'block'; // Mostrar canvas
    drawMap(); // Desenhar o mapa inicial
    gameLoop(); // Iniciar o loop do jogo
}

// Loop principal do jogo
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMap(); // Chama a função para desenhar o mapa
    movePlayer();
    drawPlayer(); // Desenhar jogador
    requestAnimationFrame(gameLoop);
}

// Eventos de teclado
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') movement.up = true;
    if (e.key === 'ArrowDown') movement.down = true;
    if (e.key === 'ArrowLeft') movement.left = true;
    if (e.key === 'ArrowRight') movement.right = true;
});

window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowUp') movement.up = false;
    if (e.key === 'ArrowDown') movement.down = false;
    if (e.key === 'ArrowLeft') movement.left = false;
    if (e.key === 'ArrowRight') movement.right = false;
});