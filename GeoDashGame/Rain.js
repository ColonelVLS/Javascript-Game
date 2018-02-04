function Rain(x, y, width, height, color){
	
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;
	
	this.show = function(){
		fill(this.color);
		rect(this.x, this.y, this.width, this.height);
	}
	
	this.fall = function(){
		this.y += 17;
		this.x -= 13;
	}
	
}


function AllDrops(){
	for(var i=0; i<rainDrop.length; i++){
		rainDrop[i].show();
		rainDrop[i].fall();
			if(rainDrop[i].y > canvasHeight){
				rainDrop.splice(i,1);	//delete drops
			}
	}	
	if(frameCount % 1 == 0){	
		rainDrop.push(new Rain( Math.round(random(0, canvasWidth+200)), -20, Math.round(random(1, 5)),  Math.round(random(4, 7)), "purple"  ));	
	}
	
}