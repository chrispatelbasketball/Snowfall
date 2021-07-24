const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, girl, speechBubble;
var snowfall = [];
var engine, world;
var snowSound;

function preload() {
backgroundImg = loadImage("snow1.jpg")

boyImg = loadImage("boy_in_snow.png")
girlImg = loadImage("girlinsnow.png")
speechImg = loadImage("speech.png")
snowSound = loadSound("snow_falling.mp3")

}
function setup() {
  createCanvas(800,400);
  snowSound.play();
  engine = Engine.create()
  world = engine.world;

  girl = createSprite(700,200, 100, 300)
  girl.addImage(girlImg)
  girl.scale = 0.3

  boy = createSprite(400, 200, 100, 300);
  boy.addImage(boyImg)
  boy.scale = 0.34

  speechBubble = createSprite(640,65,300,100)
  speechBubble.addImage(speechImg)
  speechBubble.scale = 0.29

  
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine)

  if(keyDown("LEFT_ARROW")){
    boy.x = boy.x-7 
  }

  if(keyDown("RIGHT_ARROW")){
    boy.x = boy.x+7 
  }

  if(frameCount%4 === 0){
      snowfall.push(new Snow(random(width/2 - 400, width/2 + 400), 10,10))
    }
    for (var i = 0; i < snowfall.length; i++) {
      snowfall[i].display();
    }
    

  drawSprites();

  fill("purple");
  textSize(20)
  text("SO MUCH SNOW!", 558, 63)

}