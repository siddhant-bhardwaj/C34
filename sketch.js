var ball;
var database;
var ballposition;
var position;

function setup(){
    createCanvas(500,500);
    database= firebase.database();
    console.log(database);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ballposition = database.ref('ball/position');
    ballposition.on("value",readPosition,showError);
}

function draw(){
    background("white");

   if(position!==undefined){
    if(keyDown(LEFT_ARROW)){
        writPosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writPosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writPosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writPosition(0,+1);
    }
    drawSprites();
}
   }


   
    


function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}


function readPosition(data){
    position = data.val();
    console.log(position);
    ball.x= position.x;
    ball.y = position.y;
      

}


function writPosition(x,y){
database.ref('ball/position').set(
    {
  'x': position.x+x,
  'y': position.y+y
   


    }
        );

}

function showError(){
    console.log("error");
}
