<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bostacraft</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        canvas {
            display: none;
            border: 1px solid black;
        }
        #controls {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }
        .button {
            width: 50px;
            height: 50px;
            margin: 5px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div id="menu">
        <h1>Bostacraft</h1>
        <button onclick="startGame()">Jogar</button>
    </div>
    <canvas id="gameCanvas" width="320" height="320"></canvas>
    
    <div id="controls">
        <button class="button" id="up">↑</button>
        <div>
            <button class="button" id="left">←</button>
            <button class="button" id="right">→</button>
        </div>
        <button class="button" id="down">↓</button>
    </div>

    <script src="game.js"></script>
</body>
</html>