function Bounce(){
    barrierCheck();
    if(ball.y > canvasHeight - ball.size || ball.y < ball.size){    //up down borders
        vY = -vY;
    }                                                       //p1 collision
    if(ball.x + ball.size > p1.x && ball.x - ball.size < p1.x + p1.width && ball.y - ball.size < p1.y + p1.height && ball.y + ball.size> p1.y){
        if(vX > 0){
            p1.energy += p1.energy >= 100? 0: 20;
            bounces ++;
            blop.play();
            vX = -vX;
            if(keyIsDown(LEFT_ARROW)){
                vX *= 1.4;
            }
            else if(keyIsDown(RIGHT_ARROW)){
                vX *= 0.5;
            }
            ball.flag = 0;
            
        }
    }                                                              //p2 collision
    if(ball.x - ball.size < p2.x + p2.width  && ball.x + ball.size > p2.x && ball.y - ball.size < p2.y + p2.height && ball.y + ball.size> p2.y){
        if(vX < 0){
            p2.energy += p2.energy >= 100? 0: 20;
            bounces ++;
            blop.play();
            vX = -vX;
            if(keyIsDown(68)){
                vX *= 1.4;
            }
            else if(keyIsDown(65)){
                vX *= 0.5;
            }
            ball.flag = 0;
          
        }
        
    }

if(ball.x - ball.size > canvasWidth || ball.x + ball.size < 0){    //ball out of canvas
        
    if(ball.x - ball.size > canvasWidth){           //right out
        score2 ++ ;
        bounces =0;
        p1.height = 80;
        p2.height = 80;
        ball.x = canvasWidth/2;
        ball.y = canvasHeight/2;
        vX = -4;
        vY = 4;
    }
    if( ball.x + ball.size < 0 ){               //left out
        bounces =0;
        p1.height = 80;
        p2.height = 80;
        ball.x = canvasWidth/2;
        ball.y = canvasHeight/2;
        vX = 4;
        vY = 4;
        score1 ++ ;
    } 
}

}

function barrierCheck(){                //barrier collision
    if(ball.x - ball.size<10 && p2.barrier){        console.log("hit barrier purple");
        if(ball.y-ball.size > p2.barrier.y && ball.y + ball.size < p2.barrier.y + p2.barrier.height){
            vX = 4;
            p2.barrier = null;
        }
        
    } 
   if(ball.x + ball.size > canvasWidth - 10 && p1.barrier){
        if(ball.y-ball.size > p1.barrier.y && ball.y + ball.size < p1.barrier.y + p1.barrier.height){
            vX = -4;
            p1.barrier = null;
        }
        
    }
}

