class Player {
  constructor(startx, starty) {
    this.jumpOffset = 0;
    this.x = startx;
    this.y = starty;
    this.state = "standing"; //shooting, up, down, right, left
  }

  draw() {
    rect(this.x, this.y - this.jumpOffset, 55, 55, 20);
  }
  startJump() {
    if (
      this.state === "standing" ||
      this.state === "left" ||
      this.state === "right"
    ) {
      this.state = "up";
    }
  }
  goright() {
    if (this.state === "standing" || this.state === "left") {
      this.state = "right";
    }
  }
  goleft() {
    if (this.state === "standing" || this.state === "right") {
      this.state = "left";
    }
  }

  move() {
    if (this.state === "up") {
      this.jumpOffset = this.jumpOffset + 8;
    }
    if (this.state === "down") {
      this.jumpOffset = this.jumpOffset - 8;
    }
    if (this.jumpOffset <= 0 && this.state === "down") {
      this.state = "standing";
      this.jumpOffset = 0;
    }
    if (this.jumpOffset > 140) {
      this.state = "down";
    }
    if (this.state === "right") {
      this.x = this.x + 20;
      this.state = "standing";
    }
    if (this.state === "left") {
      this.x = this.x - 20;
      this.state = "standing";
    }
    if (this.x >= 569) {
      this.x = 569;
    }
    if (this.x <= 1) {
      this.x = 1;
    }
  }
}
