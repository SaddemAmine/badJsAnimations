let numSegments = 15;
let direction = 'right';


let xCor = [];
let yCor = [];

let xFruit = 0;
let yFruit = 0;

const xStart = 0;
const yStart = 250;
const diff = 10;
let scoreElem;

function setup() {
  scoreElem = createDiv('Score = 0');
  scoreElem.position(windowWidth*5/100, windowHeight*5/100);
  scoreElem.id = 'score';
  scoreElem.style('color', 'LightCoral');
    createCanvas(windowWidth, windowHeight);
    frameRate(15);
    stroke(255, 100, 100);
    strokeWeight(10);
    updateFruitCoordinates();

    for (let i = 0; i < numSegments; i++) {
        xCor.push(xStart + i * diff);
        yCor.push(yStart);
      }
    }


function draw() {
    background(68, 68, 90, 100);
    for (let i = 0; i < numSegments - 1; i++) {
      line(xCor[i], yCor[i], xCor[i + 1], yCor[i + 1]);
    }
    updateSnakeCoordinates();
    checkGameStatus();
    CheckForFruit();
    
  }
  
function updateSnakeCoordinates() {
    for (let i = 0; i < numSegments - 1; i++) {
        xCor[i] = xCor[i + 1];
        yCor[i] = yCor[i + 1];
      }
      switch (direction) {
        case 'right':
          xCor[numSegments - 1] = xCor[numSegments - 2] + diff;
          yCor[numSegments - 1] = yCor[numSegments - 2];
          break;
        case 'up':
          xCor[numSegments - 1] = xCor[numSegments - 2];
          yCor[numSegments - 1] = yCor[numSegments - 2] - diff;
          break;
        case 'left':
          xCor[numSegments - 1] = xCor[numSegments - 2] - diff;
          yCor[numSegments - 1] = yCor[numSegments - 2];
          break;
        case 'down':
          xCor[numSegments - 1] = xCor[numSegments - 2];
          yCor[numSegments - 1] = yCor[numSegments - 2] + diff;
          break;
      }
}

function checkSnakeCollision() {
    console.log(checkSnakeCollision);
    const snakeHeadX = xCor[xCor.length - 1];
    const snakeHeadY = yCor[yCor.length - 1];
    for (let i = 0; i < xCor.length - 1; i++) {
        if (xCor[i] === snakeHeadX && yCor[i] === snakeHeadY) {
        return true;
        
      }
    }
  }

  function checkGameStatus() {
    if (
      xCor[xCor.length - 1] > width ||
      xCor[xCor.length - 1] < 0 ||
      yCor[yCor.length - 1] > height ||
      yCor[yCor.length - 1] < 0 ||
      checkSnakeCollision()
    ) {
      noLoop();
      const scoreVal = parseInt(scoreElem.html().substring(8));
      scoreElem.html('Game ended! Your score was : ' + scoreVal);
    }
  }
  function CheckForFruit() {
    point(xFruit, yFruit);
    if (xCor[xCor.length - 1] === xFruit && yCor[yCor.length - 1] === yFruit) {
      const prevScore = parseInt(scoreElem.html().substring(8));
      scoreElem.html('Score = ' + (prevScore + 1));
      xCor.unshift(xCor[0]);
      yCor.unshift(yCor[0]);
      numSegments++;
      updateFruitCoordinates();
    }
  }
  function updateFruitCoordinates() {
    xFruit = floor(random(10, (width - 100) / 10)) * 10;
    yFruit = floor(random(10, (height - 100) / 10)) * 10;   
  }

  function keyPressed() {
    switch (keyCode) {
      case 37:
        if (direction !== 'right') {
          direction = 'left';
        }
        break;
      case 39:
        if (direction !== 'left') {
          direction = 'right';
        }
        break;
      case 38:
        if (direction !== 'down') {
          direction = 'up';
        }
        break;
      case 40:
        if (direction !== 'up') {
          direction = 'down';
        }
        break;
    }
  }
