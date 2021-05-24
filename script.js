const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


// Variable cuadrado
let xPosition = 0;
let yPosition = 0;
let velocityX = getRandomArbitrary(-3, 3);
let velocityY = getRandomArbitrary(-3, 3);
// Variable circulo
let xCirculo = 275;
let yCirculo = 275;
let velocityXC = getRandomArbitrary(-5, 5);
let velocityYC = getRandomArbitrary(-5, 5);

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(xPosition, yPosition, 150, 150);
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(xCirculo, yCirculo, 100, 0, 2 * Math.PI);
    ctx.fill();

    // Cuadrado Rebota rigth
    if (xPosition + 150 >= canvas.width) {
        velocityX = -velocityX;
    }
    // Cuadrado Rebota down
    if (yPosition + 150 >= canvas.height) {
        velocityY = -velocityY;
    }

    // Cuadrado Rebota left
    if (xPosition < 0) {
        velocityX = -velocityX;
    }

    // Cuadrado Rebota up
    if (yPosition < 0) {
        velocityY = -velocityY;
    }

    // Circulo Rebota rigth
    if (xCirculo + 100 >= canvas.width) {
        velocityXC = -velocityXC;
    }
    // Circulo Rebota down
    if (yCirculo + 100 >= canvas.height) {
        velocityYC = -velocityYC;
    }

    // Circulo Rebota left
    if (xCirculo - 100 < 0) {
        velocityXC = -velocityXC;
    }

    // Circulo Rebota up
    if (yCirculo - 100 < 0) {
        velocityYC = -velocityYC;
    }

    xPosition += velocityX;
    yPosition += velocityY;
    xCirculo += velocityXC;
    yCirculo += velocityYC;

    window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}