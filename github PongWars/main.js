
var canvasWidth = 1670;
var canvasHeight = 800;
var vX = -4;
var vY = 4;
var bounces = 0;
var score1 = 9, score2 = 9;
var frameCount = 0;
var broken = 0;

var p1 = new Player(canvasWidth-30, canvasHeight/2, 30, 80, "green", 1);
var p2 = new Player(20, canvasHeight/2, 30, 80, "purple", 2);
var ball = new Ball(canvasWidth/2, canvasHeight/2, 20);
var blop = document.getElementById("blop");
var glass = document.getElementById("glass");
var glassBreak = []; 
 //glassBreak.push(glass.cloneNode());

function setup(){
    stroke(150);
    strokeWeight(2);
createCanvas(canvasWidth,canvasHeight);

}

function draw(){
    frameCount++;
background(0);
Background();

Keyboard();

if(bounces>1){
    p1.height -= 2;
    p2.height -= 2;
    bounces = 0;
}

Bounce();
ball.move();
ball.show();
p1.show();
p2.show();

}
