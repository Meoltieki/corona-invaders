const KEY_CODE_LEFT = 37;
const KEY_CODE_RIGHT = 39;
const KEY_CODE_SPACE = 32;
const KEY_CODE_UP = 38;
const KEY_CODE_DOWN = 40;


let canvasHeight, canvasWidth;
let ship;
let shipX, shipY;
let isShooted; 
let fire;
let fireX, fireY;


let scrollspeed = 2; ///hintergrund scrollen lassen tips auf: https://editor.p5js.org/chjno/sketches/ByZlypKWM

function preload() {

    ship = loadImage("img/ship.png");
    fire = loadImage ("img/fire14.png");
    bg = loadImage("img/space.jpg")

}


function setup() {
    canvasHeight =  windowHeight - 105;
    canvasWidth = windowWidth - 25;
  

    createCanvas(canvasWidth, canvasHeight);
    isShooted = false;
}


function draw() {

    background(bg);
    setShipPosition(); 
    drawShip(); 


    
    if (isShooted == true) {
        mouseReleased();
        
    }

}


function setFirePosition() {

    fireX = shipX + 33;
    fireY = canvasHeight - 110;

    image (fire, fireX, fireY);
}



function setShipPosition() {
    shipX = mouseX;
    shipY = mouseY;

    if (shipY < 0) {
        shipY = 0;     
    } else if (shipY > canvasHeight - 80) {
        shipY = canvasHeight - 80;
    }

    if (shipX < 0 ) {

        shipX = 0;
    }else if (shipX > canvasWidth - 80) {
        shipX = canvasWidth - 80;
    }
}



function drawShip() {
    image(ship ,shipX, shipY, 80, 80);
 
}

function shoot() {
 

    if (isShooted = true) {

        setFirePosition();
        
    }

}



function mouseReleased() {
    isShooted = true;
    shoot();
    console.log(isShooted);
  }