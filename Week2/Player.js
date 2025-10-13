class Player {
  constructor(name, pad) 
  {
    this.name = name
    this.score = 0
    this.highScore = 0
    this.pad = pad
  }
}
class Scoreboard {
  constructor(ctx) {w
    this.ctx = ctx
  }
  draw(p1, p2, c, hs) {
    this.ctx.fillStyle = "black"
    this.ctx.font = "20px Arial"
    this.ctx.fillText(`${p1.name}: ${p1.score}`, 50, 50)
    this.ctx.fillText(`${p2.name}: ${p2.score}`, c.width - 200, 50)
    this.ctx.fillText(`High Score - ${hs.name} ${hs.score}`, c.width / 2 - 120, 50)
  }
}