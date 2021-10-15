let gameOver = false;
let playerLastValue = "1";
let player2 = new Player(515, 345);
let player = new Player(50, 345);
let wall = new Wall(150, 330);
let wall2 = new Wall(415, 330);
let score = 0
let score2 = 0
let shots = [];
function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (gameOver) {
    background(0);
    fill("white");
    textSize(100);
    text("Game Over", 60, 150);
    textSize(50)
    text("score:", 100, 260)
    text("score2:",300, 260 )
    text(score, 233, 261)
    text(score2, 463, 261)
    text("next game: space bar", 70, 390)
    return;
  }
  background("green");
  textSize(32);
  fill("black");
  text("score:" , 60, 50 )
  text("score2:", 390, 50)
  text(score, 150, 51);
  text(score2, 500, 51);
  fill("black")
  
  player.move();
  player.draw();
  player2.move();
  player2.draw();
  wall.draw();
  wall2.draw();

  for (let i = 0; i < shots.length; i++) {
    shots[i].move();
    shots[i].draw();
    if (shots[i].collide(player)) {
      console.log("Spiel vorbei! player2 hat gewonnen!");
      score2 = score2 + 1
      gameOver = true;
      
    }
    if (shots[i].collide(player2)) {
      console.log("Spiel vorbei! player1 hat gewonnen!");
      score = score + 1
      gameOver = true;
      
    }
  
}
  }
//console.log(player.state);
//console.log(player2.state);
//console.log(shots.state);

function keyPressed() {
  if (keyCode === 87) {
    player.startJump();
  }
  if (keyCode === 68) {
    player.goright();
  }
  if (keyCode === 65) {
    player.goleft();
  }
  if (keyCode === 80) {
    player2.startJump();
  }
  if (keyCode === 222) {
    player2.goright();
  }
  if (keyCode === 76) {
    player2.goleft();
  }
  if (keyCode === 69) {
    let kugelX = player.x + 45;
    let kugelY = player.y + 25 - player.jumpOffset;
    shots.push(new Shots(kugelX, kugelY, +10));
  }
  if (keyCode === 79) {
    let kugelX = player2.x + 10;
    let kugelY = player2.y + 25 - player2.jumpOffset;
    shots.push(new Shots(kugelX, kugelY, -10));
  }
  if (keyCode === 81) {
    let kugelX = player.x + 10;
    let kugelY = player.y + 25 - player.jumpOffset;
    shots.push(new Shots(kugelX, kugelY, -10));
  }
  if (keyCode === 186) {
    let kugelX = player2.x + 45;
    let kugelY = player2.y + 25 - player2.jumpOffset;
    shots.push(new Shots(kugelX, kugelY, +10));
  }
  if (keyCode === 32 && gameOver === true) {
    // Leertaste
    player = new Player(50, 345);
    player2 = new Player(515, 345);
    shots = [];
    wall = new Wall(150, 330);
    wall2 = new Wall(415, 330);
    gameOver = false;
  }

}
