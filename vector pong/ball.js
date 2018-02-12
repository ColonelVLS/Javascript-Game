var Ball = function (position, radius) {

    this.position = position;
    this.radius = radius;
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.empowered = false;


    this.show = function () {
        fill("white");
        ellipse(this.position.x, this.position.y, this.radius, this.radius);

        if(this.empowered){
            fill(random(["yellow", "blue"]));
            ellipse(this.position.x, this.position.y, this.radius + 40, this.radius + 40);
        }
    };

    this.move = function () {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);

        //vertical out-of-bounds check
        if(this.position.y + this.radius > canvasHeight){
            this.position.y = canvasHeight - this.radius;
            this.velocity.y *= -1;
        }
        else if(this.position.y - this.radius < 0){
            this.position.y = this.radius;
            this.velocity.y *= -1;
        }
    }
};
