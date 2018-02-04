var canvasWidth=1000;
var canvasHeight=600;
var frameCount=0;
//var enemy = new Obstacle(canvasWidth,0, canvasWidth+100, 0 ,canvasWidth+50, 100 );
var obstacleUp = [];
var obstacleDown = [];
var rainDrop = [];
var colourR = 1;
var colourG =1;
var colourB = 1;
var triSide =100;
var randomTimeUp = 100;
var randomTimeDown = 200;
var demonSong;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
	//demonSong = loadSound("C:\Users\Loukas\Downloads\Little_Demon_Girl_Song-KillahChipmunk-2101926733.mp3");
	//frameRate(15);
	//demonSong.play();
	
}

var gamer = new Gamer(100,canvasHeight/2-100, 100, 100, "#CC00FF");

function keyTyped(){
	if( keyCode === 'a' );{
		gamer.changeGravity();
	}
}



function draw(){
	//angleMode(DEGREES);
	frameCount++;
	background(colourR,colourG,colourB);
 	backgroundColor(frameCount);
	AllDrops();
	gamer.show();
	gamer.pull();
	//enemy.show();
	//enemy.moveLeft();
	AllObstacles();
	deleteObstacles();
	
	Collisions();
 // box();
}

function backgroundColor(frameCount){
	if(frameCount % 60 == 0){
		colourR = random(1,255);
		colourG = random(1,255);
		colourB = random(1,255);
	}
}