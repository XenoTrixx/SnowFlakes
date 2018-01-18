let SnowFlakes = [];
const gravity = 1;
let img;
let backImg;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    img = loadImage('./assets/snowflakes_PNG7582.png');
    backImg = loadImage('./assets/snowy.png');

    for (let index = 0; index < 500; index++) {
        SnowFlakes.push(new SonwFlake(random(random(-200, -250), windowWidth)));        
    }
}

function draw() {
    background(backImg);
    frameRate(30);

    for (let index = 0; index < SnowFlakes.length; index++) {
        SnowFlakes[index].show();
        SnowFlakes[index].update();       
        
        if (SnowFlakes[index].hitBorder()){
            SnowFlakes[index] = new SonwFlake(random(random(-120, -170), windowWidth));
        }
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
