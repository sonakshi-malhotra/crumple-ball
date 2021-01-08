
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world,paper,ground

function preload()
{
  dustbinImage=loadImage("images/dustbingreen.png")
 
 
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
  paper=new Paper(100,650,10)
   box= new Box(600,680)
   	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  Engine.update(engine)
  ground.display()
    imageMode(CENTER)
  image(dustbinImage,600,630,220,120);
  paper.display()
  drawSprites();
 
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:24,y:24});
  }
}


