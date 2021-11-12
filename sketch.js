var background_img;
var link;

function preload(){
    background_image = loadImage("mydp2.jpg");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    background_img = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
    background_img.addImage("back_ground",background_image);
    background_img.scale = 1.7;
    link = createA('form.html/','Please tap here to begin')
    link.position(windowWidth/2.20,windowHeight/1.8);
    
}

function draw(){
    fill("black");
    
    drawSprites();
    textSize(70);
    text("Helping hands", windowWidth/2.9, windowHeight/2.4);
    textSize(40);
    text("Tap the text below to begin",windowWidth/3,windowHeight/2);
}
