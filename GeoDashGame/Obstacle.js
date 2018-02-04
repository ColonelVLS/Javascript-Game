function Obstacle(x1, y1, x2, y2, x3, y3){
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.x3 = x3;
	this.y3 = y3;
	this.speed = 15;
	
	this.show = function(){
		fill(Math.round(random(20,255)),100,100);
		triangle(this.x1,this.y1, this.x2,this.y2, this.x3,this.y3);
	}
	
	this.moveLeft = function(){
		this.x1 -= this.speed;
		this.x2 -= this.speed;
		this.x3 -= this.speed;
	}
	
}


function AllObstacles(){
	for(var i=0; i<obstacleUp.length; i++){
		
		obstacleUp[i].show();
		obstacleUp[i].moveLeft();
	}
	for(var i=0; i<obstacleDown.length; i++){
		obstacleDown[i].show();
		obstacleDown[i].moveLeft();
		
	}	
	if(frameCount % randomTimeUp == 0){
		randomTimeUp = Math.round( random(100,300));
		obstacleUp.push(new Obstacle(canvasWidth,0, canvasWidth + triSide, 0 ,canvasWidth + triSide/2, triSide)); //upper triangles
	}
	
	if(frameCount % randomTimeDown == 0){
		randomTimeDown = Math.round( random(100,300));																							//down triangles
		obstacleDown.push(new Obstacle(canvasWidth, canvasHeight, canvasWidth + triSide, canvasHeight,canvasWidth + triSide/2,canvasHeight - triSide ));
	}
}
	
function deleteObstacles(){
	for(var i=0; i<obstacleUp.length; i++){
		if(obstacleUp[i].x2 < 0){
			obstacleUp.splice(i, 1);			
		}
		
	for(var j=0; j<obstacleDown.length; j++){
		if(obstacleDown[j].x2 < 0){
			obstacleDown.splice(j, 1);
		}
	}  	
}
}








	
