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

// ask for names before creating player objects
let name1 = prompt("Enter Player 1 name:");
if (name1 === "") 
    {
  name1 = "Player 1";
    }
let name2 = prompt("Enter Player 2 name:");
if (name2 === "") 
    {
  name2 = "Player 2";
    }

// player array
let player = [];

// link players to paddles
player[0] = new Player(name1, p1);
player[1] = new Player(name2, p2);


// high score
let highScore = { name: "", score: 0 }

//ball setup
var ball = new Box();
ball.w = 20
ball.h = 20
ball.vx = -2
ball.vy = -2
ball.color = `orange`

function main()
{
    //erases the canvas
    ctx.clearRect(0,0,c.width,c.height)
    
    //p1 accelerates when key is pressed 
    if(keys[`w`])
    {
       p1.vy += -p1.force
    }

    if(keys[`s`])
    {
        p1.vy += p1.force
    }

    //applies friction
    p1.vy *= fy

    //player movement
    p1.move();

    //ball movement
    ball.move()

    //p2 accelerates when key is pressed 
    if(keys[`ArrowUp`])
    {
       p2.vy += -p2.force
    }

    if(keys[`ArrowDown`])
    {
        p2.vy += p2.force
    }

    //applies friction
    p2.vy *= fy

    //player movement
    p2.move();

    //p1 collision
    if(p1.y < 0+p1.h/2)
    {
        p1.y = 0+p1.h/2
    }
    if(p1.y > c.height-p1.h/2)
    {
        p1.y = c.height-p1.h/2
    }

    //p2 collision
    if(p2.y < 0+p2.h/2)
    {
        p2.y = 0+p2.h/2
    }
    if(p2.y > c.height-p2.h/2)
    {
        p2.y = c.height-p2.h/2
    }

    //ball collision 
    if (ball.x < 0) 
    {
        player[1].score += 1;
        if (player[1].score > highScore.score) highScore = { name: player[1].name, score: player[1].score };
        ball.x = c.width / 2;
        ball.y = c.height / 2;
        ball.vx = -2;
        ball.vy = -2;
    }
    if (ball.x > c.width) 
    {
        player[0].score += 1;
        if (player[0].score > highScore.score) highScore = { name: player[0].name, score: player[0].score };
        ball.x = c.width / 2;
        ball.y = c.height / 2;
        ball.vx = 2;
        ball.vy = -2;
    }
    if(ball.y < 0)
    {
        ball.y = 0
        ball.vy = -ball.vy
    }
    if(ball.y > c.height)
    {
        ball.y = c.height
        ball.vy = -ball.vy
       
    }

    //p1 with ball collision
    if(ball.collide(p1))
    {
        ball.x = p1.x + p1.w/2 + ball.w/2
        ball.vx = -ball.vx;
    }

    //p2 with ball collision
        if(ball.collide(p2))
        {
            ball.x = p2.x - p2.w/2 - ball.w/2
            ball.vx = -ball.vx
        }
        
    //draw the objects
    p1.draw()
    p2.draw()
    ball.draw()
    scoreboard.draw(player[0], player[1], c, highScore);
}
