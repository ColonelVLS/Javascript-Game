
function Ball(x, y, size){
    this.x = x;
    this.y = y;
    this.size = size;
    this.flag = 0;

    this.show = function(){
        if(this.flag){
            fill("red");
            ellipse(this.x, this.y, this.size+10);
        }
        
        fill("yellow");
        ellipse(this.x, this.y, this.size);
    }

    this.move = function(){
        this.x += vX;
        this.y += vY;
    }


}