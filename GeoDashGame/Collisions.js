function Collisions(){
	
	for(var i=0;  i < obstacleDown.length; i++ ){
		
		if( obstacleDown[i].x3 > gamer.x && obstacleDown[i].x3 < gamer.x + gamer.width){
			if(obstacleDown[i].y3 <= gamer.y + gamer.height){
				//alert("you lost"); 
				location.reload();
			}	
		}
	}
	for(var i=0;  i < obstacleUp.length; i++ ){
		if(obstacleUp[i].x3 > gamer.x && obstacleUp[i].x3 < gamer.x + gamer.width ){
			if(obstacleUp[i].y3 >= gamer.y){
				//alert("you lose");
				location.reload();
			}
			
		
		}
		
		
		
	}
	
}