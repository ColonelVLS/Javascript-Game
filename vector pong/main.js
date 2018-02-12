new p5();

//CANVAS PROPERTIES
const canvasWidth = window.innerWidth - 100;
const canvasHeight = window.innerHeight - 50;

//GAME CONSTANTS
const playerWidth = 30;
const playerHeight = 80;
const initialBallVelocityX = -4;
const initialBallVelocityY = 4;
const standardPlayerVelocityX = 8;
const standardPlayerVelocityY = 6;
const playerHeightDecrementFactor = 2;


//GAME VARIABLES
var score1 = 0, score2 = 0;
var bounces = 0;


//GAME OBJECTS

//player bats
var p1 = new Player(createVector(canvasWidth-30, canvasHeight/2), playerWidth, playerHeight, "green", 1);
var p2 = new Player(createVector(0, canvasHeight/2), playerWidth, playerHeight, "purple", 2);

//ball
var ball = new Ball(createVector(canvasWidth/2, canvasHeight/2), 20);
ball.velocity = createVector(initialBallVelocityX, initialBallVelocityY);

//sound objects
var blop = document.getElementById("blop");
var glass = document.getElementById("glass");


//setup
function setup(){
    stroke(150);
    strokeWeight(2);
    createCanvas(canvasWidth,canvasHeight);
}


//game loop
function draw() {

    //setting up background
    background(0);
    Background();

    //checking for keyboard events
    Keyboard();

    //checking for collisions
    collisionDetection();

    //drawing the game objects
    ball.show();
    p1.show();
    p2.show();

    //moving the game objects
    ball.move();
    p2.move();
    p1.move();


}