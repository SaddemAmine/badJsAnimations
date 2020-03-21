let Pink;
let size = 0;
let state = 1;
let shade;

function setup() {
    createCanvas(windowWidth,windowHeight);
    Pink = color(255, 100, 100);
    shade = parseInt(Pink.toString().substr(9,3));
} 

function draw() {    
    
    console.log(shade);

    if(size == 500)
        state = 0;
    if(!size)
        state = 1;

    if(state){
        shade++;
        Pink.setBlue(shade);
        Pink.setGreen(shade);
        stroke(Pink);
        fill(Pink);
        ellipse(windowWidth/2,windowHeight/2,size,size);
        size+=5;
    }
    else{
        shade--;
        Pink.setBlue(shade);
        Pink.setGreen(shade);
        stroke(Pink);
        fill(Pink);
        clear();
        ellipse(windowWidth/2,windowHeight/2,size,size);
        size-=5;
    }
}   