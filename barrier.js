function Barrier(x, height, color){
    this.x = x;
    this.color = color;
    this.height = height;
    this.y = (canvasHeight-this.height)/2;

    this.show = function(){
        fill(this.color);
        rect(this.x, this.y, 10, this.height);
    
    }
}