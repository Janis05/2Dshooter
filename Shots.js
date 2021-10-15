class Shots {
  constructor(startx, starty, direction) {
    this.state = "flying"; // standing, flying

    console.log(startx, starty);
    this.x = startx;
    this.y = starty;
    this.direction = direction;
  }
  draw() {
    circle(this.x, this.y, 10);
  }

  move() {
    if (this.state === "flying") {
      this.x = this.x + this.direction;
    }
  }
  collide(player) {
    let collidesOnX = player.x < this.x && this.x < player.x + 55
    
    let playerY = player.y - player.jumpOffset
    let collidesOnY = playerY < this.y && this.y < playerY + 55
 
    return collidesOnX && collidesOnY;
  }
}
