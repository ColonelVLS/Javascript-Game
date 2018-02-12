var collisionDetection = function () {

    /**
     * collision detection consists of 5 parts (as of yet)
     * collision with player1 and player2 barriers (if they exist)
     * collision with player1 and player2 themselves
     * goal check, in case a player managed to score.
     *
     * The out-of-bounds check for the player bats is implemented in their respective "move" functions
     */


    ballToBarrier1();

    ballToBarrier2();

    ballToPlayer1();

    ballToPlayer2();

    goalCheck();

};

var ballToPlayer1 = function () {

    if(ball.position.x + ball.radius > p1.position.x
        && ball.position.x - ball.radius < p1.position.x + p1.width
        && ball.position.y - ball.radius < p1.position.y + p1.height
        && ball.position.y + ball.radius> p1.position.y){

        /**
         * The following code checks whether the ball was moving towards the player when the collision happened
         * The check is done to avoid double hits by the player.
         */
        if(ball.velocity.x > 0){

            //with each bounce, if the energy is not maximized, increase it by 20 points
            p1.energy += p1.energy >= 100? 0 : 20;
            //increment the bounces counter
            bounces++;
            //if bounces exceed 10, the player height is reduced by a standard factor
            if(bounces>10){
                p1.height -= playerHeightDecrementFactor;
                p2.height -= playerHeightDecrementFactor;
                bounces = 0;
            }
            //play the ball-to-bat collision sound
            blop.play();

            //changing the direction of the ball's velocity vector
            ball.velocity.x *= -1;

            //if the user was moving towards the direction of the ball when they collided
            //then the ball will go faster
            if(p1.velocity.x < 0){
                ball.velocity.x *= 1.5;
            }
            //similarly, if the user was moving in the opposite direction
            //the ball is slowed
            else if(p1.velocity.x > 0){
                ball.velocity.x *= 0.5;
            }

            //collision with the ball, removes the empowered visual effect
            ball.empowered = false;
        }

    }
};

var ballToPlayer2 = function () {

    if(ball.position.x - ball.radius < p2.position.x + p2.width
        && ball.position.x + ball.radius > p2.position.x
        && ball.position.y - ball.radius < p2.position.y + p2.height
        && ball.position.y + ball.radius> p2.position.y){

        /**
         * The following code checks whether the ball was moving towards the player when the collision happened
         * The check is done to avoid double hits by the player.
         */
        if(ball.velocity.x < 0){
            //with each bounce, if the energy is not maximized, increase it by 20 points
            p2.energy += p2.energy>=100? 0 : 20;
            //increment the bounces counter
            bounces++;
            //if bounces exceed 10, the player height is reduced by a standard factor
            if(bounces>10){
                p1.height -= playerHeightDecrementFactor;
                p2.height -= playerHeightDecrementFactor;
                bounces = 0;
            }
            //play the ball-to-bat collision sound
            blop.play();

            //changing the direction of the ball's velocity vector
            ball.velocity.x *= -1;

            //if the user was moving towards the direction of the ball when they collided
            //then the ball will go faster
            if(p2.velocity.x > 0){
                console.log("accelerate thanks to p2");
                ball.velocity.x *= 1.5;
            }
            //similarly, if the user was moving in the opposite direction
            //the ball is slowed
            else if(p2.velocity.x < 0){
                ball.velocity.x *= 0.5;
            }

            //collision with the ball, removes the empowered visual effect
            ball.empowered = false;
        }

    }



};

var ballToBarrier1 = function () {

};

var ballToBarrier2 = function () {

};

var goalCheck = function () {

    //if the ball has passed the canvas' left bound then it's a goal for player 1
    if(ball.position.x + ball.radius < 0
        || ball.position.x - ball.radius > canvasWidth){

        //incrementing the scorer's score
        if(ball.position.x - canvasWidth > 0){
            score2++;
        }
        else if(ball.position.x - canvasWidth < 0){
            score1++;
        }

        //resetting the bounces counter
        bounces = 0;

        //resetting the player bat heights
        p1.height = playerHeight;
        p2.height = playerHeight;

        //putting the ball to its original position and restarting the game
        ball.position = createVector(canvasWidth/2, canvasHeight/2);
        ball.velocity = createVector(initialBallVelocityX, initialBallVelocityY);
    }

};
