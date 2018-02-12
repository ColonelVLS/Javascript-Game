function Keyboard(){

    if(keyIsDown(65)){
        p2.moveLeft();
        if(p2.x <= 0){
            p2.x = 0;
        }
    }
    if(keyIsDown(81)){      //summon barrier (Q)
        if(frameCount % 7 == 0){
            p2.barrier = new Barrier(0, p2.energy*canvasHeight/100, p2.color);
            p2.energy = 0;
        }
    }
        
    if(keyIsDown(68)){
        p2.moveRight(); 
        if(p2.x + p2.width > canvasWidth/2){
            p2.x = canvasWidth/2 - p2.width ;
        }
    }
    if(keyIsDown(87)){
        p2.moveUp();
    }
    if(keyIsDown(83)){
        p2.moveDown();
    }
    if(keyIsDown(69)){ //ball force (E)
        if(p2.energy>=40 && ball.x < canvasWidth/2){
            vX = vX*(p2.energy+100)/100;
             p2.energy=0;
            ball.flag = 1;
        }
    }
    
    if(keyIsDown(RIGHT_ARROW)){
        p1.moveRight();
        if(p1.x + p1.width > canvasWidth ){
            p1.x = canvasWidth - p1.width ;
        }
    }
    if(keyIsDown(76)){      //summon barrier (L)
        if(frameCount % 7 == 0){
            p1.barrier = new Barrier(canvasWidth - 10, p1.energy*canvasHeight/100, p1.color);
            p1.energy = 0;
        }
    }
    if(keyIsDown(DOWN_ARROW)){
    p1.moveDown();
    
    }
    if(keyIsDown(UP_ARROW)){
    p1.moveUp();
   
    }
    if(keyIsDown(LEFT_ARROW)){
        p1.moveLeft();
        if(p1.x < canvasWidth/2){
            p1.x = canvasWidth/2;
        }
    }
    if(keyIsDown(80)){  //ball force (P)
        if(p1.energy>=40 && ball.x > canvasWidth/2){
            vX = vX*(p1.energy+100)/100;
            p1.energy = 0;
            ball.flag = 1;
        }
    }
    


}