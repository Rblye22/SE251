//canvas and context
var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)
var scoreboard = new Scoreboard(ctx)

//timer to make the game run at 60fps
var timer = setInterval(main, 1000/60)

//global friction variable
var fy = .97

//p1 setup
var p1 = new Box();
p1.w = 15
p1.h = 130
p1.x = 0 + p1.w/2

//p2 setup
var p2 = new Box();
p2.w = 15
p2.h = 130
p2.x = c.width - p2.w/2

// ask for player names 
let name1 = prompt("Enter Player 1 name:");
if (name1 === "") {
  name1 = "Player 1";
}
let name2 = prompt("Enter Player 2 name:");
if (name2 === "") {
  name2 = "Player 2";
}

// player array
let player = [];

// link players to paddles
player[0] = new Player(name1, p1);
player[1] = new Player(name2, p2);

// ✅ new pad array
let pad = [];
pad[0] = player[0].pad;
pad[1] = player[1].pad;

// high score
let highScore = { name: "", score: 0 }

//ball setup
var ball = new Box();
ball.w = 20
ball.h = 20
ball.vx = -2
ball.vy = -2
ball.color = `orange`

function main() {
    //erases the canvas
    ctx.clearRect(0,0,c.width,c.height)
    
    //pad[0] accelerates when key is pressed 
    if(keys[`w`]) {
       pad[0].vy += -pad[0].force
    }
    if(keys[`s`]) {
        pad[0].vy += pad[0].force
    }

    //applies friction and moves
    pad[0].vy *= fy
    pad[0].move();

    //ball movement
    ball.move()

    //pad[1] accelerates when key is pressed 
    if(keys[`ArrowUp`]) {
       pad[1].vy += -pad[1].force
    }
    if(keys[`ArrowDown`]) {
        pad[1].vy += pad[1].force
    }

    //applies friction and moves
    pad[1].vy *= fy
    pad[1].move();

    //pad collisions with walls
    for (let i = 0; i < pad.length; i++) {
        if (pad[i].y < pad[i].h / 2) pad[i].y = pad[i].h / 2;
        if (pad[i].y > c.height - pad[i].h / 2) pad[i].y = c.height - pad[i].h / 2;
    }

    //ball collision with walls
    if (ball.x < 0) {
        player[1].score += 1;
        if (player[1].score > highScore.score) highScore = { name: player[1].name, score: player[1].score };
        ball.x = c.width / 2;
        ball.y = c.height / 2;
        ball.vx = -2;
        ball.vy = -2;
    }
    if (ball.x > c.width) {
        player[0].score += 1;
        if (player[0].score > highScore.score) highScore = { name: player[0].name, score: player[0].score };
        ball.x = c.width / 2;
        ball.y = c.height / 2;
        ball.vx = 2;
        ball.vy = -2;
    }
    if (ball.y < 0) {
        ball.y = 0
        ball.vy = -ball.vy
    }
    if (ball.y > c.height) {
        ball.y = c.height
        ball.vy = -ball.vy
    }

    //pad collisions with ball
    if (ball.collide(pad[0])) {
        ball.x = pad[0].x + pad[0].w/2 + ball.w/2
        ball.vx = -ball.vx;
    }
    if (ball.collide(pad[1])) {
        ball.x = pad[1].x - pad[1].w/2 - ball.w/2
        ball.vx = -ball.vx
    }
        
    //draw objects
    pad[0].draw()
    pad[1].draw()
    ball.draw()
    scoreboard.draw(player[0], player[1], c, highScore);
}