class Wall {
  constructor(startx, starty){
  this.x = startx
  this.y = starty
}
  draw(){
    rect(this.x, this.y, 55, 70)
  }
  collide(Player){
    let collidesOnX = this.x
    let collidesOnY = this.y
    return collidesOnX && collidesOnY
  }
  collides(Shots){
    let collidesOnX = this.x
    let collidesOnY = this.y
    return collidesOnX && collidesOnY
  }
}
