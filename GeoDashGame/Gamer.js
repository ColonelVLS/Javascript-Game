function Gamer(x, y, width, height, color){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;
	this.velocity = 0;
	this.gravity = 0.5;

	this.show = function(){
		//rotate(-30);
		stroke(0);
		strokeWeight(3);
		fill(this.color);
		rect(this.x, this.y, this.width, this.height);
		fill("green");
		ellipse(this.x +this.width / 2, this.y + this.height / 2, this.width);
		line(this.x + this.width, this.y, this.x, this.y + this.height)
		fill("yellow");
		ellipse(this.x +this.width / 2, this.y + this.height / 2, this.width/2);
		fill(255);
		line(this.x, this.y, this.x + this.width, this.y + this.height);
		
	
	}

	this.pull = function(){
		this.velocity = this.velocity + this.gravity;
		this.y += this.velocity*2;
		
		if(this.y > canvasHeight - this.height){
			this.y = canvasHeight - this.height;
			this.velocity=0;
		}
		if(this.y < 0){
			this.y =0;
			this.velocity=0;
		}
	}
	
	this.changeGravity = function(){
			this.gravity =   -this.gravity;
	}
	

}