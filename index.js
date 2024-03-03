<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Blooming Flower</title>
<style>
    body {
        margin: 0;
        overflow: hidden;
        background-color: #000;
    }
    canvas {
        display: block;
    }
</style>
</head>
<body>
<canvas id="canvas"></canvas>
<script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    function drawFlower(petals, radius, color) {
        const angleIncrement = (Math.PI * 2) / petals;
        ctx.beginPath();
        for (let i = 0; i < Math.PI * 2; i += angleIncrement) {
            const x = centerX + Math.cos(i) * radius;
            const y = centerY + Math.sin(i) * radius;
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
    }

    function bloom() {
        for (let i = 0; i < 10; i++) {
            const radius = Math.random() * 100 + 50;
            const petals = Math.floor(Math.random() * 10) + 5;
            const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
            drawFlower(petals, radius, color);
        }
    }

    bloom();
</script>
</body>
</html>
