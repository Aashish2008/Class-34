var Ball;
var database,position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    Ball = createSprite(250,250,10,10);
    Ball.shapeColor = "red";
    var ballposition = database.ref('ball/positions');
    ballposition.on("value",readposition, showerror)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function readposition(data){
    position = data.val();
    Ball.x = position.x;
    Ball.y = position.y;
}

function showerror(){
    console.log("error");
}

function writePosition(x,y){
    database.ref('ball/positions').set({
        'x' : position.x + x,
        'y' : position.y + y
    })
}
