const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let xPosition = 0;
let yPosition = 0;
let velocityX = getRandomArbitrary(-3, 3);
let velocityY = getRandomArbitrary(-3, 3);
let xCircle = 275;
let yCircle = 275;
let velocityXC = getRandomArbitrary(-5, 5);
let velocityYC = getRandomArbitrary(-5, 5);




function draw() {
    const squareBlue = new square(xPosition, yPosition, velocityX, velocityY);
    const circleRed = new circle(xCircle, yCircle, velocityXC, velocityYC);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    squareBlue.drawSquare();
    circleRed.drawCircle();

    if(xPosition + velocityX > canvas.width-150 || xPosition < 0) {
        velocityX = -velocityX;
    }

    if(yPosition + velocityX > canvas.height-150 || yPosition < 0) {
        velocityY = -velocityY;
    }

    if(xCircle + velocityXC > canvas.width-100 || xCircle + velocityXC < 100) {
        velocityXC = -velocityXC;
    }

    if(yCircle + velocityYC > canvas.height-100 || yCircle + velocityYC < 100) {
        velocityYC = -velocityYC;
    }

    xPosition += velocityX;
    yPosition += velocityY;
    xCircle += velocityXC;
    yCircle += velocityYC;

    window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

class square {
    constructor(xPosition, yPosition, velocityX, velocityY) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
    }
    drawSquare() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(xPosition, yPosition, 150, 150);
    }
}

class circle {
    constructor(xCircle, yCircle, velocityXC, velocityYC) {
        this.xCircle = xCircle;
        this.yCircle = yCircle;
        this.velocityXC = velocityXC;
        this.velocityYC = velocityYC;
    }
    drawCircle() {
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.arc(xCircle, yCircle, 100, 0, 2 * Math.PI);
        ctx.fill();
    }
}
