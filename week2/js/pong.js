//canvas and context
var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)

//scoreboard elements
var scoreDivs = document.querySelectorAll(`#score div`)

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

//ask for player names 
let name1 = prompt("Enter Player 1 name:");
if (name1 === "") {
  name1 = "Player 1";
}
let name2 = prompt("Enter Player 2 name:");
if (name2 === "") {
  name2 = "Player 2";
}

//player array
let player = [];

//link players to paddles
player[0] = new Player(name1, p1);
player[1] = new Player(name2, p2);

//new pad array
let pad = [];
pad[0] = player[0].pad;
pad[1] = player[1].pad;

//controls for each paddle 
var controls = []
controls[0] = {up:`w`, down:`s`}
controls[1] = {up:`ArrowUp`, down:`ArrowDown`}

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

    //paddles movement and wall collision
    for(var i = 0; i < pad.length; i++)
    {
        if(keys[controls[i].up])
        {
            pad[i].vy += -pad[i].force
        }
        if(keys[controls[i].down])
        {
            pad[i].vy += pad[i].force
        }
        pad[i].vy *= fy
        pad[i].move()
        if(pad[i].y < pad[i].h/2)
        {
            pad[i].y = pad[i].h/2
        }
        if(pad[i].y > c.height - pad[i].h/2)
        {
            pad[i].y = c.height - pad[i].h/2
        }
    }

    //ball movement
    ball.move()

    //ball collision with walls
    if (ball.x < 0) 
    {
    player[1].score += 1;
    console.log(`${player[0].score} | ${player[1].score}`);
    ball.x = c.width / 2;
    ball.y = c.height / 2;
    ball.vx = -2;
    ball.vy = -2;
    }
    if (ball.x > c.width) 
    {
        player[0].score += 1;
        console.log(`${player[0].score} | ${player[1].score}`);
        ball.x = c.width / 2;
        ball.y = c.height / 2;
        ball.vx = 2;
        ball.vy = -2;
    }
    if (ball.y < 0)
    {
        ball.y = 0
        ball.vy = -ball.vy
    }
    if (ball.y > c.height)
    {
        ball.y = c.height
        ball.vy = -ball.vy
    }

    //paddle and ball collision
    for(var i = 0; i < pad.length; i++)
    {
        if(ball.collide(pad[i]))
        {
            if(i === 0)
            {
                ball.x = pad[i].x + pad[i].w/2 + ball.w/2
            }
            else
            {
                ball.x = pad[i].x - pad[i].w/2 - ball.w/2
            }
            ball.vx = -ball.vx
        }
    }

    //draw paddles
    for(var i = 0; i < pad.length; i++)
    {
        pad[i].draw()
    }

    //draw ball
    ball.draw()

    //update score display
    for(var i = 0; i < scoreDivs.length; i++)
    {
        scoreDivs[i].innerText = player[i].name + ": " + player[i].score
    }
}