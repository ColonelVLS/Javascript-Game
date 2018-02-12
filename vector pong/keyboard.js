var Keyboard = function () {

    /**
     * checks for all possible user-based events
     */

    //LEFT = 1, DOWN = 2, RIGHT = 3, UP = 4

    //KEY "A" moves player2 to the left
    if(keyIsDown(65)){
        p2.velocity.add(createVector(-1.5,0));
    }

    //KEY "D" moves player2 to the right
    if(keyIsDown(68)){
        p2.velocity.add(createVector(1.5,0));
    }

    //KEY "W" moves player2 upwards
    if(keyIsDown(87)){
        p2.velocity.add(createVector(0,-1.5));
    }

    //KEY "S" moves player2 downwards
    if(keyIsDown(83)){
        p2.velocity.add(createVector(0,1.5));
    }

    //KEY "Q" summons player2's barrier if his energy is sufficient
    if(keyIsDown(81)){
        if(frameCount % 7 == 0){
            p2.barrier = new Barrier(0, p2.energy*canvasHeight/100, p2.color);
            p2.energy = 0;
        }
    }



    //KEY "RIGHT-ARROW" moves player1 to the right
    if(keyIsDown(RIGHT_ARROW)){
        p1.velocity.add(createVector(1.5, 0));
    }

    //KEY "DOWN-ARROW" moves player1 downwards
    if(keyIsDown(DOWN_ARROW)){
        p1.velocity.add(createVector(0, 1.5));
    }

    //KEY "UP-ARROW" moves player1 upwards
    if(keyIsDown(UP_ARROW)){
        p1.velocity.add(createVector(0, -1.5));
    }

    //KEY "LEFT-ARROW" moves player1 to the left
    if(keyIsDown(LEFT_ARROW)){
        p1.velocity.add(createVector(-1.5, 0));
    }

    //KEY "L" summons player1's barrier if his energy is sufficient
    if(keyIsDown(76)){
        if(frameCount % 7 == 0){
            p1.barrier = new Barrier(canvasWidth - 10, p1.energy*canvasHeight/100, p1.color);
            p1.energy = 0;
        }
    }

};
