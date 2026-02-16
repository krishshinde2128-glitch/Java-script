const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const box = 20;
let snake = [{ x: 200, y: 200 }];
let direction = "RIGHT";
let score = 0;

let food = {
    x: Math.floor(Math.random() * 20) * box,
    y: Math.floor(Math.random() * 20) * box
}

//keyboard controls
document.addEventListener("keydown", changeDirection);

function changeDirection(e) {
    if (e.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    if (e.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
    if (e.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    if (e.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
}

//game loop
function draw(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,400,400);

    //draw snake
    ctx.fillStyle = "pink";
    snake.forEach(part => {
        ctx.fillRect(part.x, part.y, box, box);
    });

    //draw food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    let headX = snake[0].x;
    let headY = snake[0].y;

    if(direction === "UP") headY -= box;
    if(direction === "DOWN") headY += box;
    if(direction === "LEFT") headX -= box;
    if(direction === "RIGHT") headX += box;

    //eat food 
    if(headX === food.x && headY === food.y){
        score++;
        food = {
            x: Math.floor(Math.random() * 20) * box,
            y: Math.floor(Math.random() * 20) * box
        };
    } else {
        snake.pop();
    }

    const newHead = { x:headX, y:headY };

    //check collision
    if (
        headX < 0 || headX >= canvas.width ||
        headY < 0 || headY >= canvas.height ||
        snake.some(part => part.x === newHead.x && part.y === newHead.y)
    ) {
        clearInterval(game);
        alert("Game Over! Score: " + score);
        return;
    }

    snake.unshift(newHead);
}

let game = setInterval(draw, 500);