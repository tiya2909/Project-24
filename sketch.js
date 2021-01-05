
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxS1, boxS2, boxS3;
var paperObject, ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	paperObject = new Paper(300, 500, 1,5,1.5) 

	ground = new Ground(350,700,980,20)

	boxS1 = new Dustbin(350,680,200,20);
	boxS1.shapeColor = color(128,0,0);
 
	boxS2 = new Dustbin(450,640,20,100);
	boxS2.shapeColor = color(128,0,0);

	boxS3 = new Dustbin(250,640,20,100);
	boxS3.shapeColor = color(128,0,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paperObject.display();
  boxS1.display();
  boxS2.display();
  boxS3.display();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

}

}