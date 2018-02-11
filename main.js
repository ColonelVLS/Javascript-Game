
var canvasWidth = 1670;
var canvasHeight = 700;
var vX = -4;
var vY = 4;
var bounces = 0;
var score1 = 0, score2 = 0;

var p1 = new Player(canvasWidth-30, canvasHeight/2, 30, 80, "green", 1);
var p2 = new Player(20, canvasHeight/2, 30, 80, "purple", 2);
var ball = new Ball(canvasWidth/2, canvasHeight/2, 20);
var blop = document.getElementById("blop");

function setup(){
    stroke(150);
    strokeWeight(2);
createCanvas(canvasWidth,canvasHeight);

}

function draw(){
background(0);
//Background();
if(keyIsDown(65)){
    p2.moveLeft();
}
if(keyIsDown(81)){      //summon barrier (Q)
        p2.barrier = new Barrier(0, p2.energy*canvasHeight/100, p2.color);
        p2.energy = 0;
}
    
if(keyIsDown(68)){
    p2.moveRight(); 
    if(p2.x + p2.width > canvasWidth/2){
        p2.x = canvasWidth/2 - p2.width ;
    }
}
if(keyIsDown(87)){
    p2.moveUp();
}
if(keyIsDown(83)){
    p2.moveDown();
}
if(keyIsDown(69)){ //ball force (E)
    if(p2.energy>=60 && ball.x < canvasWidth/2){
        p2.energy-=60;
        vX *= 2;
        ball.flag = 1;
    }
}

if(keyIsDown(RIGHT_ARROW)){
    p1.moveRight();
    if(p1.x + p1.width > canvasWidth ){
        p1.x = canvasWidth - p1.width ;
    }
}
if(keyIsDown(76)){      //summon barrier (L)

        p1.barrier = new Barrier(canvasWidth - 10, p2.energy*canvasHeight/100, p1.color);
        p1.energy = 0;
    
}
if(keyIsDown(DOWN_ARROW)){
p1.moveDown();
}
if(keyIsDown(UP_ARROW)){
p1.moveUp();
}
if(keyIsDown(LEFT_ARROW)){
    p1.moveLeft();
    if(p1.x < canvasWidth/2){
        p1.x = canvasWidth/2;
    }
}
if(keyIsDown(80)){  //ball force (P)
    if(p1.energy>=60 && ball.x > canvasWidth/2){
        p1.energy -= 60;
        vX *= 2;
        ball.flag = 1;
    }
}

if(bounces>5){
    p1.height -= 10;
    p2.height -= 10;
    bounces = 0;
}

textSize(60);
fill(100);
text(score2 + "-" + score1, canvasWidth/2 - 45, canvasHeight/10);

Bounce();
ball.move();
ball.show();
p1.show();
p2.show();

}
