function setup() {
    createCanvas(windowWidth,windowHeight);
}

function draw() {
    var colorArray = [
        color(255, 100, 100), 
        color(255, 230, 230),
        color(255, 200, 200)
    ];

    c = Math.floor(Math.random() * colorArray.length);
    x = Math.floor(Math.random() * 1300);
    y = Math.floor(Math.random() * 700);
    z = Math.floor(Math.random() * 250);

    stroke(colorArray[c]);
    fill(colorArray[c]);
    ellipse(x,y,z,z);
}