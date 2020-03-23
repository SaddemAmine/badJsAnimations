let x = 0;
let y = 0;
let xState = 1;
let yState = 1;
let colorState = 0;
let colorIndex = 0;

function setup(){
    frameRate(60);
    createCanvas(windowWidth, windowHeight);
    x = Math.floor(Math.random() * windowWidth);
    y = Math.floor(Math.random() * windowWidth);
    noStroke();
}

function draw(){    
    background(68,68,90);
    rect(x,y,150,150);
    
    if(x+150 == windowWidth){
        xState = 0;
        colorIndex++;
    }
    if(x == 0){
        xState = 1;
        colorIndex++;
    }
    
    if(y+150 == windowHeight){
        yState = 0;
        colorIndex++;
    }
    if(y == 0){
        yState = 1;
        colorIndex++;
    }

    if(colorIndex == 99){
        colorState = 0;
    }
    if(colorIndex == 0){
        colorState = 1;
    }

    colorState ? colorIndex++ : colorIndex--;

    fill(255,100+colorIndex,100+colorIndex);

    if(xState)
        x++;
    else
        x--;

    if(yState)
        y++;
    else
        y--;
        
    console.debug("(x,y) = ("+x+","+y+") xState = "+xState+" yState = "+yState);
    translate(x,y);
}