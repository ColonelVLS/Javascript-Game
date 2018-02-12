
function Player(x, y, width, height, color, side){
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.color = color;
this.velocity = 9;

this.energy = 0;
this.energyX = side == 1? canvasWidth - 220: 20;
this.energyY = 20;
this.msgX = side == 1? this.energyX - 60: this.energyX; 
this.msg = side == 1? "press L to activate shield!" : "press Q to activate shield!" 
this.barrier = null;

this.show = function(){
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
    fill(100);
    rect(this.energyX, this.energyY, 200, 15);
    fill(this.color);
    rect(this.energyX, this.energyY, this.energy*2, 15);
    fill("yellow");
    textSize(15);
    if(this.energy == 100){
        text(this.msg, this.msgsX, this.energyY);
    }
    if(this.barrier){
        this.barrier.show();
    }

}

this.moveUp = function(){
    
    this.y -= this.velocity;
    if(this.y < 0){
        this.y = 0;
    
}
}

this.moveDown = function(){
    
    this.y += this.velocity;
    if(this.y > canvasHeight - p1.height){
        this.y = canvasHeight - p1.height;
    
}
}
this.moveRight = function(){
    this.x += this.velocity;
    }

this.moveLeft = function(){
    this.x -= this.velocity;
   
}
}

