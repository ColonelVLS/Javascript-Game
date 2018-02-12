function Barrier(position, height, color){

    this.position = position;
    this.color = color;
    this.height = height;
    this.width = 10;
    this.y = (canvasHeight-this.height)/2;

    this.show = function(){
        fill(this.color);
        rect(this.x, this.y, 10, this.height);

    }
}
